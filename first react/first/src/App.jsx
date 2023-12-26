import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hide from './component/Hide';
import Card from './component/cards';
import CalculateAge from './CalculateAge';
import Counter from './counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './component/BacicExample';
import Str from "./component/Str";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";





function App() {
  // let [data, setData] = useState(["amaan", "burhan"])
  // let [name, setName] = useState('')

  // const [hideText, setHideText] = useState(true)

  // const addname = () => {
  //   data.push(name)
  //   setName('')
  //   setData([...data])
  // }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Hel lo World</h1>
    },
    {
      path: "/test",
      element: <div>new test element created</div>
    },
    {
      path: "/Str",
      element: <Str />
    }
  ])



  return (
    <>
      {/* {hideText ? <BasicExample /> : null}
      <button onClick={() => { setHideText(!hideText) }}>clike</button><br /> */}
      {/* <input type="text" placeholder='enter your name' value={name} onChange={ev => setName(ev.target.value)} />
      <input type="button" value="submit" onClick={addname} />

      <h1>Names</h1>
      {data.map(name => <p>{name}</p>)} */}
      <RouterProvider router={router} />

    </>
  )
}

export default App
