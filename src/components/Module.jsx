import React from 'react'
import { closeModule } from '../features/module/moduleSlice'
import { clearCart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const Module = () => {
  const dispatch = useDispatch()
  return (
    <aside className='modal-container'>
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button className="btn confirm-btn" onClick={() => {
            dispatch(clearCart())
            dispatch(closeModule())
          }}>Confirm</button>
          <button className="btn clear-btn" onClick={() => {
            dispatch(closeModule())
          }}>Cancel</button>
        </div>
      </div>
    </aside>
  )
}

export default Module