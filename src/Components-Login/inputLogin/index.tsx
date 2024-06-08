import { InputTypeLogin } from "../../types";
import "./style.css";

type InputLoginProps = {
  setInputLogin: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  typeInput: InputTypeLogin;
};

function InputLogin({ setInputLogin, value, typeInput }: InputLoginProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputLogin(event.target.value);
  };

  return (
    <input
      className="input-login"
      value={value}
      placeholder={
        InputTypeLogin.Email === typeInput
          ? "Email or phone number"
          : "Password"
      }
      type={InputTypeLogin.Email === typeInput ? "text" : "password"}
      onChange={handleChange}
    />
  );
}

export default InputLogin;
