const initState = {
    items: [    
        {id: 1, name: 'Pepsi', price: 1.50, quantity: 2},
        {id: 2, name: 'O. Spray', price: 1.50, quantity: 2},
        {id: 3, name: 'Mt. Dew', price: 1.50, quantity: 2},
        {id: 4, name: 'CRUNCH', price: 1.75, quantity: 2},
        {id: 5, name: 'Milky Way', price: 1.50, quantity: 2},
        {id: 6, name: 'Snickers', price: 1.75, quantity: 2},
        {id: 7, name: 'Skittles', price: 1.50, quantity: 2},
        {id: 8, name: 'M & Ms', price: 1.50, quantity: 2},
        {id: 9, name: 'Kit-Kat', price: 1.50, quantity: 2},
        {id: 10, name: 'Cheetos', price: 1.50, quantity: 2},
        {id: 11, name: 'Doritos', price: 1.50, quantity: 2},
        {id: 12, name: 'Fritos', price: 1.75, quantity: 2}
      ],
      priceOfItem: null,
      purchaseError: null
}

const itemReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SHOW_PRICE_OF_ITEM':
            console.log('showing price of item');
            let item = state.items.find(item => action.id === item.id);
            return {
                ...state,
                priceOfItem: item.price
            }
        case 'PURCHASE_ITEM_SUCCESS':
        return {
                ...state,
                items: state.items.map(
                    (item) => item.id === action.id ? {...item, quantity: item.quantity -= 1 } : item
                )
            }
        case 'INSUFFICIENT_FUNDS':
         item = state.items.find(item => action.id === item.id);

        return {
                ...state,
                purchaseError: `Price of item is ${item.price}`
            }
        case 'OUT_OF_STOCK':

        return {
                ...state,
                purchaseError: `Out of Stock`
            }
        case 'RESET_ERROR':
        return {
                ...state,
                purchaseError: null
            }

        default:
        return state;
    }
   
}

export default itemReducer