import { InputTypeLogin } from "../../types";
import InputLogin from "../inputLogin";
import "./style.css";
type FormLoginProps = {
  email: string;
  password: string;
  setInputEmail: React.Dispatch<React.SetStateAction<string>>;
  setInputPassword: React.Dispatch<React.SetStateAction<string>>;
};
function FormLogin({
  setInputEmail,
  setInputPassword,
  email,
  password,
}: FormLoginProps) {
  return (
    <form className="form">
      <InputLogin
        setInputLogin={setInputEmail}
        value={email}
        typeInput={InputTypeLogin.Email}
      />
      <InputLogin
        setInputLogin={setInputPassword}
        value={password}
        typeInput={InputTypeLogin.Password}
      />
    </form>
  );
}

export default FormLogin;
