import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter =15

  const addValue = () =>{
    // counter++
    if(counter<=20){
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter((prevcounter)=>prevcounter + 1)
      setCounter((prevcounter)=>prevcounter + 1)
      setCounter((prevcounter)=>prevcounter + 1)
      setCounter(counter+1)
      setCounter(counter+1)
    }
    // console.log(counter)
  }
  const subValue = () =>{
    counter--
    if(counter >= 0){
      setCounter(counter)
    }

    // console.log(counter)
  }

  return (
    
    <>
      <h1>Pani aur React</h1>
      <h2>Counter value : {counter}</h2>
      <br />

      <button onClick = {addValue} >Add value {counter} </button>
      <br />
      <button onClick = {subValue} >Remove value {counter} </button>
    </>
  )
}

export default App
