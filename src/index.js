import React from 'react'
import ReactDOM from 'react-dom/client'

function Greeting() {
  return <input type="text" name="" id="" placeholder="Enter your name" />
}

// function Greeting() {
//   return React.createElement(
//     'div',
//     null,
//     React.createElement('h2', null, 'My First Component')
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
)
