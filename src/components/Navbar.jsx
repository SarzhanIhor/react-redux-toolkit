import React from 'react'
import { useSelector } from 'react-redux'
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
    const {amount} = useSelector((state) => state.cart)
    console.log(amount);
  return (
    <nav>
        <div className="nav-center">
            <h3>Cart Redux Toolkit</h3>
            <div className="nav-container">
                <FaCartPlus/>
                <div className="amount-counter">
                    <p className="total-amount">{amount}</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar