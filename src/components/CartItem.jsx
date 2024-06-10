import React from 'react'
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
{/* <FaChevronUp />
<FaChevronDown /> */}


const CartItem = ({id, img, title, price, amount}) => {
  // console.log(title);
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default CartItem