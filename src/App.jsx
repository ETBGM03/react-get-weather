import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AppUI } from './layout/AppUI'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppUI />
    </>
  )
}

export{ App}
