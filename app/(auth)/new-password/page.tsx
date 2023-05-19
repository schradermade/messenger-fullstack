"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";

type NewPasswordProps = {};

const NewPassword: React.FC<NewPasswordProps> = () => {
  return (
    <>
      <div className="password-container">
        <p className="title">New Password</p>
        <Input
          label="Enter New Password"
          placeholder="At least 8 digits"
          type="password"
          id="password"
          onInputChange={() => {}}
        />
        <Input
          label="Confirm Password"
          placeholder="At least 8 digits"
          type="password"
          id="confirm-password"
          onInputChange={() => {}}
        />
        <Button label="Set New Password" width="100" />
      </div>
      <style jsx>{`
        .password-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .title {
          margin-top: 0;
          margin-bottom: 50px;
        }
      `}</style>
    </>
  );
};

export default NewPassword;
