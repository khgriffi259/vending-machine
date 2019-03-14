import React from 'react'

const Display = (props) => {
    const {money_received, purchaseError} = props;
    
    const displayValue = (money_received, error) => {
        if (error) {
            return error;
        } else if (money_received){
            return money_received;
        } else {
            return 'Select an Item'
        }
    }

    return (
        <div className="display"> 
            {displayValue(money_received, purchaseError)}
        </div>
    )
}

export default Display
