"use client";

import { useRouter } from "next/navigation";

type ButtonProps = {
  label: string;
  width: string;
  routerPath?: string;
};

const Button: React.FC<ButtonProps> = ({ label, width, routerPath }) => {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => router.push(`${routerPath}`)}
        type="button"
        className="button"
      >
        {label}
      </button>
      <style jsx>{`
        .button {
          margin-top: 25px;
          margin-bottom: 25px;
          color: white;
          background: rgb(0, 159, 253);
          background: linear-gradient(
            90deg,
            rgba(0, 159, 253, 0.6603773584905661) 70%,
            rgba(0, 212, 255, 1) 100%
          );
          border-radius: 50px;
          width: ${width}%;
          height: 46px;
          font-size: 18px;
          font-weight: 300;
          border: none;
          cursor: pointer;
          &:hover {
            background: #19a8fd;
          }
        }
      `}</style>
    </>
  );
};

export default Button;
