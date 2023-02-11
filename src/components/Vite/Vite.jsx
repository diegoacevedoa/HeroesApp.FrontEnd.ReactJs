import reactLogo from "../../assets/react.svg";
import "./Vite.css";

function Vite() {
  return (
    <div className="bodyVite">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/HeroesApp.FrontEnd.ReactJs/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </div>
  );
}

export default Vite;
