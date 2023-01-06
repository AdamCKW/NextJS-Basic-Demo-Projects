const reducer = (state, action) => {
    let tempCart;
    switch (action.type) {
        /* Returning a new state object with the cart property set to an empty array. */
        case 'CLEAR_CART':
            return { ...state, cart: [] };

        /* This is the code that removes an item from the cart. */
        case 'REMOVE':
            return {
                ...state,
                cart: state.cart.filter(
                    (cartItem) => cartItem.id !== action.payload
                ),
            };

        /* This is the code that increases the amount of an item in the cart. */
        case 'INCREASE':
            tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, amount: cartItem.amount + 1 };
                }
                return cartItem;
            });
            return { ...state, cart: tempCart };

        /* This is the code that decreases the amount of an item in the cart. Removes the item if amount is 0 */
        case 'DECREASE':
            tempCart = state.cart
                .map((cartItem) => {
                    if (cartItem.id === action.payload) {
                        return { ...cartItem, amount: cartItem.amount - 1 };
                    }
                    return cartItem;
                })
                .filter((cartItem) => cartItem.amount !== 0);
            return { ...state, cart: tempCart };

        case 'TOGGLE_AMOUNT':
            tempCart = state.cart
                .map((cartItem) => {
                    if (cartItem.id === action.payload.id) {
                        /* This is the code that increases the amount of an item in the cart. */
                        if (action.payload.type === 'inc') {
                            return { ...cartItem, amount: cartItem.amount + 1 };
                        }

                        /* This is the code that decreases the amount of an item in the cart. */
                        if (action.payload.type === 'dec') {
                            return { ...cartItem, amount: cartItem.amount - 1 };
                        }
                    }
                    return cartItem;
                })
                .filter((cartItem) => cartItem.amount !== 0);
            return { ...state, cart: tempCart };

        /* This is the code that calculates the total price of the items in the cart. */
        case 'GET_TOTALS':
            let { total, amount } = state?.cart?.reduce(
                (cartTotal, cartItem) => {
                    const { price, amount } = cartItem;
                    const itemTotal = price * amount;

                    cartTotal.total += itemTotal;
                    cartTotal.amount += amount;
                    return cartTotal;
                },
                {
                    total: 0,
                    amount: 0,
                }
            );
            /* Converting the total to a float and then rounding it to 2 decimal places. */
            total = parseFloat(total.toFixed(2));
            /* Returning a new state object with the total and amount properties set to the values of
            the total and amount variables. */
            return { ...state, total, amount };

        /* This is the code that sets the loading property to true. */
        case 'LOADING':
            return { ...state, loading: true };

        case 'DISPLAY_ITEMS':
            return { ...state, cart: action.payload, loading: false };
    }

    /* Throwing an error if the action type is not found. */
    throw new Error('no matching action type');
};

export default reducer;
