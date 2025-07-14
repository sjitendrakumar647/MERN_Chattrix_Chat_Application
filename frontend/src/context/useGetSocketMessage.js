import { useEffect } from 'react'
import { useSocketContext } from './SocketContext'
import userConversation from '../zustand/userConversation';

const useGetSocketMessage = () => {
  const { socket } = useSocketContext();
  const { setMessage } = userConversation();

  useEffect(() => {
    if (!socket) return;

    const handleMessage = (newMessage) => {
      console.log("New message received:", newMessage)
      setMessage(prev => [...prev, newMessage]);
    }

    socket.on("getMessage", handleMessage);

    return () => {
      socket.off("getMessage", handleMessage);
    }
  }, [socket, setMessage]);
}

export default useGetSocketMessage
