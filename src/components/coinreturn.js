import React from 'react'
import { connect } from 'react-redux'
import { returnMoney }  from '../actions/moneyActions'

const CoinReturn = (props) => {
    const { returnMoney } = props;
    return (
        <div className="coinreturn" onClick={()=>returnMoney()}>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        returnMoney: (amount) => dispatch(returnMoney())
    }
}

export default connect(null, mapDispatchToProps)(CoinReturn)
