import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const reactElement = { 
//   type : 'a',
//   props : {
//       href : 'https://google.com' ,
//       target : '_blanc'
//   } , 
//   children: 'Click me to visit Google'
// }

const anotherElement = (
  <a href="https://google.com"  target = '_blank'>Visit Google</a>
)

const anotherUser = 'Pani aur Doodh with React'

const reactElement= React.createElement(
  'a',
  {href: 'https://google.com ', target: '_blank'} ,
  'Click me to visit google with object that react uses. ' ,
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // <MyApp />

  // <reactElement/>  syntax of this is not correct 

  // anotherElement
  reactElement
  // <App/>

)
