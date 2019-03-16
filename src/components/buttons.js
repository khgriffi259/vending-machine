import React from 'react'
import { connect } from 'react-redux'
import { showPriceOfItem, purchaseItemSuccess, insufficientFunds, outOfStock, resetError } from '../actions/itemsActions'
import { depositMoney } from '../actions/moneyActions'

const Buttons = ({items, purchaseItemSuccess, insufficientFunds, outOfStock, showPriceOfItem, money_received, resetError, depositMoney}) => {

    const attemptPurchase = (item_id, item_price, money_received, item_quantity) => {
        if (item_quantity <= 0) {
            return outOfStock(null,()=>setTimeout(()=>resetError(),2000));
        }else if (money_received < item_price) {
            return insufficientFunds(item_id, ()=>setTimeout(()=>resetError(),2000));
        } else {
            return purchaseItemSuccess(item_id, () => depositMoney(item_price));
        }
    }

    const itemList = items.length ? (   
        items.map(item => {
            return(
                <div className="button btn btn-primary" onClick={()=>{attemptPurchase(item.id, item.price, money_received, item.quantity)}} key={item.id}>
                    <span className="">{item.name}</span>
                </div>
            )
        })
    ) : (
        <p>There are no items to buy</p>
    )

    return(
        <div className="">
            <div className="buttons">
                 {itemList}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        purchaseItemSuccess: (id, callback) => {
            dispatch(purchaseItemSuccess(id));
            callback();
        },
        outOfStock: (id, callback) => {
            dispatch(outOfStock());
            callback();
        },
        insufficientFunds: (id, callback) => {
            dispatch(insufficientFunds(id));
            callback();
        },
        showPriceOfItem: (id) => dispatch(showPriceOfItem(id)),
        resetError: () => dispatch(resetError()),
        depositMoney: (amount) => dispatch(depositMoney(amount))
        }
    }

export default connect(null, mapDispatchToProps)(Buttons);