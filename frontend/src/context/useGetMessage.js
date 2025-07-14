import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import userConversation from '../zustand/userConversation.js';

function useGetMessage() {
    const [loading, setLoading] = useState(false);
    const { messages, setMessage, selectedConversation } = userConversation();

    // Define fetchMessages with useCallback so it can be used outside useEffect
    const fetchMessages = useCallback(async () => {
        setLoading(true);
        if (selectedConversation && selectedConversation._id) {
            try {
                const response = await axios.get(
                    `http://localhost:4001/message/get/${selectedConversation._id}`,
                    { withCredentials: true }
                );
                setMessage(response.data.messages);
            } catch (error) {
                console.error("Error fetching messages:", error);
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    }, [selectedConversation, setMessage]);

    // Fetch messages when selectedConversation changes
    useEffect(() => {
        fetchMessages();
    }, [fetchMessages]);

    return {
        loading,
        messages,
        fetchMessages, // Expose fetchMessages for manual refresh
    };
}

export default useGetMessage;
