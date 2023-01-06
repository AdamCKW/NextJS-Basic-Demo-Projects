import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from '../components/context';

const CartContainer = () => {
    /* Destructuring the cart and total from the useGlobalContext hook. */
    const { cart, total, clearCart } = useGlobalContext();

    /* This is a ternary operator. It is saying if the cart is empty, then return the empty cart
   message. If the cart is not empty, then return the cart. */
    if (cart.length === 0) {
        return (
            <section className="cart">
                {/* cart header */}
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        );
    }

    return (
        <section className="cart">
            {/* cart header */}
            <header>
                <h2>your bag</h2>
            </header>

            {/* cart items */}
            <div>
                {cart.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })}
            </div>

            {/* cart footer */}
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>

                <button className="btn clear-btn" onClick={clearCart}>
                    clear cart
                </button>
            </footer>
        </section>
    );
};

export default CartContainer;
