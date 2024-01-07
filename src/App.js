import logo from './logo.svg';
import './App.css';
import './crossword/Crucigrama.css';
import Crucigrama from "./crossword/Crucigrama";

function App() {
  return (
    <div className="App">
        <button className="Button" onClick={Crucigrama}> Button</button>
        <button className="Button"> Button</button>
    </div>
  );
}

export default Crucigrama;
