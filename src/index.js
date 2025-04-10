import React from 'react'
import ReactDOM from 'react-dom/client'

function Greeting() {
  return (
    <React.Fragment>
      <Person />
      <Message />
    </React.Fragment>
  )
}

const Person = () => <h2>John Doe</h2>

const Message = () => {
  return <h2>Hello everyone</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
)
