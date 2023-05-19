"use client";

import VerificationInput from "@/app/components/VerificationInput";

const Verification = () => {
  return (
    <>
      <div className="verif-container">
        <p>Enter Verification Code</p>
        <VerificationInput />
      </div>
      <style jsx>{`
        .verif-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default Verification;
