import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider >
      <h1>Context Api (means creating a global variable where all the data will go) Application </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
    
  )
}

export default App
