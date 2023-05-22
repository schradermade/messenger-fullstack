"use client";

import Image from "next/image";

type LoginLayoutProps = {
  children: React.ReactNode;
};

const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="root">
        <div className="header">
          <h2 className="title">My Messenger App</h2>
          <Image
            alt="Logo"
            height="35"
            width="35"
            className="logo"
            src="/images/logo.png"
          />
        </div>
        <div className="children">{children}</div>
      </div>
      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          height: 500px;
          width: 400px;
          border-radius: 10px;
          background: rgb(255, 255, 255);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 5%,
            rgba(211, 211, 211, 1) 50%
          );
        }
        .header {
          display: flex;
          align-items: center;
          justify-content: center;
          // border-bottom: 0.5px solid gray;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          width: 100%;
        }
        .title {
          color: gray;
          margin-right: 15px;
        }
        .children {
          padding: 25px;
        }
      `}</style>
    </>
  );
};

export default LoginLayout;
