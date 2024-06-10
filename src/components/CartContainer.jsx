import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'


const CartContainer = () => {
const {cartItems, total, amount} = useSelector(state => state.cart)
// console.log(cartItems);
if (amount < 1) { 
    return ( <section className="cart">
    <header>
        <h2>
            Your bag
        </h2>
        <h4 className='empty-cart'>
            is currently empty
        </h4>
    </header>
    </section>
    )
}
    return (
    <section className='cart'>
        <header>
            <h2>Your bag
            </h2>
        </header>
        <div>
            {cartItems.map(item => {
                const {id, title, amount} = item
                console.log(title);
                return (
                    <CartItem key={item.id} {...item}/>
                )
            })}
        </div>
        <footer className="footer">
            <hr/>
            <div className="cart-total">
                <h4>
                    total <span>
                        {total}
                    </span>
                </h4>
            </div>
            <button className="btn clear-btn">Clear Cart</button>
        </footer>
    </section>
    )
    }

    export default CartContainer