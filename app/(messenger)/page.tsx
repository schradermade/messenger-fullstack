"use client";

import ChatWindow from "../components/ChatWindow";
import FriendsList from "../components/FriendsList";

const MessengerWindow = () => {
  return (
    <>
      <div className="messenger-container">
        <div className="friends">
          <FriendsList />
        </div>
        <div className="chat-window">
          <ChatWindow />
        </div>
      </div>
      <style jsx>{`
        .messenger-container {
          display: flex;
          width: 100vw;
          height: 100vh;
        }
        .friends {
          display: flex;
          flex-direction: column;
          align-items: center;
          border-right: 0.5px solid black;
          flex-basis: 20%;
          background: #91a2b4;
          padding-top: 25px;
          overflow-y: scroll;
        }
        .chat-window {
          display: flex;
          background: #c7d9ec;
          flex-basis: 100%;
        }
      `}</style>
    </>
  );
};

export default MessengerWindow;
