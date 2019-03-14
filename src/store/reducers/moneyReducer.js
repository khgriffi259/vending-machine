const initState = {
    money_received: null,
    bank: null
};

const moneyReducer = (state = initState, action) => {
    
    switch (action.type) {
        case 'ADD_MONEY':
        // console.log(state.money_received)
            return {
                ...state,
                money_received: state.money_received + action.amount 
            }
        case 'PURCHASE_ITEM_SUCCESS':
        return {
                ...state,
                money_received: null
            }
        case 'RETURN_MONEY':
        return {
                ...state,
                money_received: null
            }
        case 'DEPOSIT_MONEY':
        return {
                ...state,
                bank: state.bank + action.amount
        }
            default:
            return state
    }
}

export default moneyReducer