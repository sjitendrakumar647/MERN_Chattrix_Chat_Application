import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAuth } from "./AuthProvider";

export const SocketContext = createContext();

export const useSocketContext = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [authUser] = useAuth();
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    if (authUser && authUser.user && authUser.user._id) {
      const newSocket = io("http://localhost:4001", {
        query: { userId: authUser.user._id },
      });
      setSocket(newSocket);

      newSocket.on("getOnlineUsers", setOnlineUsers);

      return () => {
        newSocket.disconnect();
      };
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
