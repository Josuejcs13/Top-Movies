import "./style.css";

type TitleLoginProp = {
  text: string;
};
function TitleLogin({ text }: TitleLoginProp) {
  return (
    <div className="titleLogin">
      <h1>{text}</h1>
    </div>
  );
}

export default TitleLogin;
