import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import userConversation from '../zustand/userConversation.js';

function useSendMessage() {
    
    const [loading, setLoading] = useState(false);
    const {messages, setMessage, selectedConversation} = userConversation();

    const sendMessage = async (message) => {
        setLoading(true);
    try {
            const response = await axios.post(`http://localhost:4001/message/send/${selectedConversation._id}`, { message }, { withCredentials: true });
            setMessage([...messages, response.data.message]);
            setLoading(false);
        } catch (error) {
            console.error("Error sending message:", error);
            setLoading(false);
        }
        
    }

    return {
        loading,
        sendMessage
    }
}

export default useSendMessage;

