import { useState } from 'react'
import './App.css'
import { Navbar } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar/>
      <h2>Redux Toollit</h2>
    </main>
  )
}

export default App
