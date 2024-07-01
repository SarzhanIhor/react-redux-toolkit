import { useState, useEffect } from 'react'
import { Navbar, CartContainer, Module } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals } from './features/cart/cartSlice'

function App() {
  const [count, setCount] = useState(0)
  const {cartItems} = useSelector(store => store.cart) 
  const {isOpen} = useSelector(store => store.module)
  const dispatch = useDispatch()
  console.log(isOpen);

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <main>
      {isOpen && <Module/>}
      <Navbar/>
      <CartContainer/>
    </main>
  )
}

export default App
