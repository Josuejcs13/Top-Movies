import "./style.css";
type ButtonLogin = {
  children: string;
};

function ButtonLogin({ children }: ButtonLogin) {
  return (
    <button className="button-login" onClick={() => alert("Vagabundo")}>
      {children}
    </button>
  );
}

export default ButtonLogin;
