import { useState } from 'react'
import { Navbar, CartContainer } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar/>
      <CartContainer/>
    </main>
  )
}

export default App
