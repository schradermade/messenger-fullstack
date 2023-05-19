"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Link from "next/link";

const ResetPassword = () => {
  return (
    <>
      <div className="reset-container">
        <p>Forgot Password</p>
        <p className="title">Enter Email Address</p>
        <Input
          placeholder="example@gmail.com"
          type="email"
          id="email"
          onInputChange={() => {}}
        />
        <Link
          style={{ textDecoration: "none", fontSize: "14px" }}
          href={"/signin"}
        >
          Back to sign in
        </Link>
        <Button routerPath="/verification" label="Send" width={"100"} />
      </div>
      <style jsx>{`
        .reset-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .title {
          font-size: 16px;
          font-weight: 600;
        }
        .input {
          width: 75%;
        }
        .signin {
          text-decoration-line: none;
        }
        .button {
          margin-top: 25px;
        }
      `}</style>
    </>
  );
};

export default ResetPassword;
