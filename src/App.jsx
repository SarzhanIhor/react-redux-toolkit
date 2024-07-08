import { useEffect } from 'react'
import { Navbar, CartContainer, Module } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals, getCartItems } from './features/cart/cartSlice'

function App() {
  const {cartItems, isLoading} = useSelector(store => store.cart) 
  const {isOpen} = useSelector(store => store.module)
  const dispatch = useDispatch()
  // console.log(isOpen);

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  if(isLoading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    )
  } 

  return (
    <main>
      {isOpen && <Module/>}
      <Navbar/>
      <CartContainer/>
    </main>
  )
}

export default App
