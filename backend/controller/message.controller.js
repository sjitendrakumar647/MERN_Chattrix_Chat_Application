import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId } from "../SocketIO/server.js";
// import Message from "../models/Message.model.js";

export const sendMessage = async (req, res) => {
    console.log("Message received:", req.params.id, req.body.message);
    try {
        // res.status(200).json({ success: true, message: "Message sent successfully!" });

        const { message } = req.body; // Extracting the message from the request body
        const { id: receiverId } = req.params; // Extracting the user ID from the request parameters
        const senderId = req.user._id; // Assuming req.user is populated with the authenticated user's data

        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        });
        if (!conversation) {
            // If no conversation exists, create a new one
            conversation = await Conversation.create({
                members: [senderId, receiverId],
                messages: []
            });
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        await Promise.all([
            conversation.save(),
            newMessage.save()

        ]);
        // After saving the message, we can emit it to the receiver's socket
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId) {
            // Emit the new message to the receiver's socket
            req.io.to(receiverSocketId).emit("getMessage", newMessage);
        }

        res.status(201).json({
            message: "Message sent successfully!",
            newMessage,
        });

    } catch (error) {
        console.error("Error sending message:", error);
        res.status(500).json({ success: false, message: "Failed to send message." });
    } 
};


export const getMessage = async (req, res) => {
    try {
        const { id: receiverId } = req.params; // Extracting the user ID from the request parameters
        const senderId = req.user._id; // Assuming req.user is populated with the authenticated user's data

        const conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        }).populate('messages');

        if (!conversation) {
            // If no conversation exists, return an empty array
            return res.status(200).json({
                messages: [],
                // message: "No conversation found between the users."
            });  
        }
        const messages = conversation.messages;
        res.status(200).json({
            messages
        });
        

    } catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).json({ success: false, message: "Failed to fetch messages." });
    }
};