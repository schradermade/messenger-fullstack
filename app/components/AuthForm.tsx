import Link from "next/link";
import Button from "./Button";
import Input from "./Input";

const AuthForm = () => {
  function handleInput(e: any) {
    console.log(e.target.value);
  }
  return (
    <>
      <div className="root">
        {/* <div className="input-container"> */}
        <p className="welcome">Welcome! Sign in here</p>
        <Input
          onInputChange={(e) => handleInput(e)}
          label="Email"
          type="email"
          id="email"
          placeholder="example@gmail.com"
        />
        <Input
          onInputChange={(e) => handleInput(e)}
          label="Password"
          type="password"
          id="password"
          placeholder="At least 8 digits"
        />
        <Button label="Login" width="100" routerPath="/" />
        <Link href={"/reset"} className="forgot-pass">
          Forgot password? Click here
        </Link>
      </div>
      <style jsx>{`
        .root {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .welcome {
          color: #0000ff;
          font-size: 18px;
          margin: 0;
          margin-bottom: 25px;
        }
        .input-container {
          //   width: 65%;
        }
        .button {
          margin-top: 25px;
          margin-bottom: 25px;
        }
        .forgot-pass {
          color: blue;
          font-size: 12px;
          background: none;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default AuthForm;
