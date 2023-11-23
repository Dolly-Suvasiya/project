import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hide from './component/Hide';
import Card from './component/cards';


function App() {
  // let name = "salman"
  // const [count, setCount] = useState(500)

  // return (
  //   <>

  //     <h1>
  //       hello {name}
  //     </h1>
  //     <p>this is your points {count}</p>
  //     <button onClick={() => { setCount((count) => count + 5) }}>click</button>

  //   </>
  // )s
  const [counter, setCounter] = React.useState(0);
  let users = [
    {
      name: "savaz",
      email: "savaz@gmail.com",
      contact: "1234567890"
    },
    {
      name: "savaz",
      email: "savaz@gmail.com",
      contact: "1234567890"
    },
    {
      name: "savaz",
      email: "savaz@gmail.com",
      contact: "1234567890"
    },
    {
      name: "savaz",
      email: "savaz@gmail.com",
      contact: "1234567890"
    },
    {
      name: "savaz",
      email: "savaz@gmail.com",
      contact: "1234567890"
    },
    {
      name: "savaz",
      email: "savaz@gmail.com",
      contact: "1234567890"
    }
  ]
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <div>
        {users.map(user => {
          <Card user={user} />
        })}
      </div>
    </div>
  )
}

export default App
