
import Chai from "./chai"

function App() {
  const username = 'Harshit'

  return (
    //   // as we can return only one tag we either make ot empty(fragment) or we use div
    <>
      <h1>React with vite | Hero {username} </h1>
      <Chai/>
      <p>Test para</p>
    </>
  )
}

export default App
 