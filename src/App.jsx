import { useState } from 'react'

import './App.css'
import { Advice } from './Components/Advice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Advice/>
      
    </>
  )
}

export default App
