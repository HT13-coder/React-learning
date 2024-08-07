import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    name: 'Harshit',
    age : '22'
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-700 text-black p-4 rounded-2xl mb-4">Tailwind Test</h1>
      {/* <Card channel='chaiaurcode' someObj = {myObj} someArr = {newArr} /> */}
      <Card username = "chaiaurcode" btnText = "click me"/>
      <Card username="Harshit" btnText = "visit me"/>
      <Card/>
    </>
  );
}

export default App;
