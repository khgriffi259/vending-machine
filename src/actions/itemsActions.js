export const showPriceOfItem = (id) => {
    return({
        type: 'SHOW_PRICE_OF_ITEM',
        id: id
    });
}

export const purchaseItemSuccess = (id, item_price, money_received) => {
    //if enough money received, return the action object to be passed to the reducer
    //if money in bank is greater than or equal to item_price, return the action object
    // else return the price of the item or the difference
        return(
            { 
            type: 'PURCHASE_ITEM_SUCCESS',
            id: id
        });
    
    }
    export const insufficientFunds = (id, item_price, money_received) => {
            return(
                { 
                type: 'INSUFFICIENT_FUNDS',
                id: id
            });
        
        }
    export const outOfStock = () => {
            return(
                { 
                type: 'OUT_OF_STOCK',
            });
        
        }
    
    export const resetError = () => {
        return (
            {
                type: 'RESET_ERROR'
            }
        )
    }






