import logo from "./logo.svg";
import "./App.css";
import { MyCounter } from "@todcode/components";
// import { MyCounter } from 'my-react-typescript-package'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyCounter/>
      </header>
    </div>
  );
}

export default App;
