export const addMoney = (amount) => {
    return {
        type: 'ADD_MONEY',
        amount
    }
}

export const returnMoney = () => {
    return {
        type: 'RETURN_MONEY'
    }
}

export const depositMoney = (amount) => {
    return {
        type: 'DEPOSIT_MONEY',
        amount
    }
}