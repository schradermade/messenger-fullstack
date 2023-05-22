type InputProps = {
  label?: string;
  type: string;
  id: string;
  onInputChange: (e: any) => void;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  type,
  id,
  onInputChange,
  placeholder,
}) => {
  return (
    <div className="input-container">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input"
        type={type}
        id={id}
        onChange={(e) => onInputChange(e)}
        placeholder={placeholder}
      />
      <style jsx>{`
        .input-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .input {
          font-size: 16px;
          border-radius: 50px;
          border: 1px solid gray;
          padding: 10px 10px 10px 15px;
          background: white;
          color: gray;
          margin: 10px 0 10px 0;
          height: 25px;
          009ffd
        }
        textarea:focus, input:focus {
          outline: 1px solid #009ffd;
      }
        .label {
          color: gray;
          font-size: 12px;
          padding-left: 15px;
        }
      `}</style>
    </div>
  );
};

export default Input;
