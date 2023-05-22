import Image from "next/image";
import Link from "next/link";
import TextBox from "./TextBox";

const ChatWindow = () => {
  return (
    <>
      <div className="chat-container">
        <div className="message-window">message window</div>
        <div className="text-box">
          <TextBox />
          <button className="send-button" onClick={() => alert("sent message")}>
            <Image
              alt="Logo"
              height="65"
              width="65"
              className="send"
              src="/images/sendPic.svg"
            />
          </button>
        </div>
      </div>
      <style jsx>{`
        .chat-container {
          display: flex;
          flex-direction: column;
          align-items: space-between;

          width: 100%;
          height: 100%;
        }
        .message-window {
          flex-basis: 100%;
          background: #d3d3d3;
        }
        .text-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-basis: 70px;
          //   background: yellow;
          padding-left: 25px;
        }
        .send-button {
          border: none;
          background: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default ChatWindow;
