import { useState } from "react";
import TitleLogin from "./Components-Login/tileLogin";
import "./App.css";
import ButtonLogin from "./Components-Login/buttonLogin";
import FormLogin from "./Components-Login/formLogin";

function App() {
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");

  return (
    <div className="App">
      <img
        src="./src/assets/US-en-20221128-popsignuptwoweeks-perspective_alpha_website_large.jpg.png"
        className="background"
      />
      <main>
        <TitleLogin text="Sing In" />
        <FormLogin
          password={inputPassword}
          email={inputEmail}
          setInputEmail={setInputEmail}
          setInputPassword={setInputPassword}
        />
        <ButtonLogin>Sing In</ButtonLogin>
        <a
          className="forgot"
          href="https://www.netflix.com/ca/LoginHelp"
          target="_blank"
        >
          Forgot password?
        </a>
      </main>
    </div>
  );
}

export default App;
