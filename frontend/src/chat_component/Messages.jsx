import React from 'react'

function Messages({ message }) {
  const authUser = JSON.parse(localStorage.getItem("users"));

  const sender = message.senderId === authUser.user._id;

  const chatName = sender ? "chat-end" : "chat-start";
  const chatBubbleClass = sender
    ? "chat-bubble chat-bubble-info rounded-xl"
    : "chat-bubble chat-bubble-primary rounded-xl";

  const color = sender ? "text-white" : "text-gray-900";

  const createdAt = message.createdAt ? new Date(message.createdAt) : null;
  const formattedTime =
    createdAt && !isNaN(createdAt)
      ? createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      : "";

  return (
    <div>
      <div className={`chat ${chatName}`}>
        <div className={chatBubbleClass}>
          {message.message}
          <span
            className={`block text-xs ${!color} mt-2 text-right`}
            style={{ fontSize: "0.75rem" }}
          >
            {formattedTime}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Messages
