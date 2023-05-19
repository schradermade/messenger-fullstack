import React from "react";

const VerificationInput = () => {
  const numFields = 4;

  const [verifyValues, setVerifyValue] = React.useState({
    verify1: "",
    verify2: "",
    verify3: "",
    verify4: "",
  });

  const handleInputChange = (e: any) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    if (value.length >= maxLength) {
      if (parseInt(fieldIndex, 10) < 5) {
        const nextSibling = document.querySelector<HTMLInputElement>(
          `input[name=verif-${parseInt(fieldIndex, 10) + 1}]`
        );
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
    }
    setVerifyValue({
      ...verifyValues,
      [`verify${fieldIndex}`]: value,
    });
  };
  if (
    verifyValues.verify1?.length == 1 &&
    verifyValues.verify2?.length == 1 &&
    verifyValues.verify3?.length == 1 &&
    verifyValues.verify4?.length == 1
  ) {
    console.log("its full");
  }

  return (
    <>
      <div>
        <input
          onChange={handleInputChange}
          name="verif-1"
          id="verif-1"
          className="verif-input"
          maxLength={1}
          type="text"
        />
        <input
          onChange={handleInputChange}
          name="verif-2"
          id="verif-2"
          className="verif-input"
          maxLength={1}
          type="text"
        />
        <input
          onChange={handleInputChange}
          name="verif-3"
          id="verif-3"
          className="verif-input"
          maxLength={1}
          type="text"
        />
        <input
          onChange={handleInputChange}
          name="verif-4"
          id="verif-4"
          className="verif-input"
          maxLength={1}
          type="text"
        />
      </div>
      <style jsx>{`
        .verif-input {
          background: white;
          border: none;
          border-radius: 5px;
          border-bottom: 0px solid black;
          width: 50px;
          height: 50px;
          margin: 10px;
          outline: none;
          text-align: center;
          font-size: 26px;
        }
      `}</style>
    </>
  );
};

export default VerificationInput;
