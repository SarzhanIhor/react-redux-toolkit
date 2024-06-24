import { useState, useEffect } from 'react'
import { Navbar, CartContainer } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals } from './features/cart/cartSlice'

function App() {
  const [count, setCount] = useState(0)
  const {cartItems} = useSelector(state => state.cart) 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <main>
      <Navbar/>
      <CartContainer/>
    </main>
  )
}

export default App
