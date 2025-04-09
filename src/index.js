import React from 'react'
import ReactDOM from 'react-dom/client'

function Greeting() {
  return (
    <div>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <h2>My First Component</h2>
    </div>
  )
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
