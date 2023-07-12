import './App.css';
import Quote from "./components/Quote/Quote";
import useGenerateRandomColor from "./hooks/useGenerateRandomColor";
import {useEffect} from "react";

function App() {
    const { color, generateColor }
        = useGenerateRandomColor();

  return (
    <div className="App"
        style={{
            backgroundColor: "#" + color
        }}
    >
        <h2>Random Quotes!</h2>
      <Quote generateColor={() => generateColor()}/>
    </div>
  );
}

export default App;
