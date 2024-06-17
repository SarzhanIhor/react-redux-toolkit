import React from 'react'
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';



const CartItem = ({id, img, title, price, amount}) => {
  const dispatch = useDispatch()
  // console.log(title);
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5 className='item-price'>{price}</h5>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          Remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => dispatch(increase({id}))}><FaChevronUp /></button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => {
          if (amount === 1) {
            dispatch(removeItem(id))
            return 
          }
          dispatch(decrease({id}))
            }
          }><FaChevronDown /></button>
      </div>
    </article>
  )
}

export default CartItem