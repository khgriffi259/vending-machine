import React from 'react'
import pepsi from '../img/pepsi.jpg'
import oceanspray from '../img/oceanspray.jpg'
import mtdew from '../img/mtdew.jpg'
import crunch from '../img/crunch.jpeg'
import milkyway from '../img/milkyway.png'
import snickers from '../img/snickers.jpeg'
import skittles from '../img/skittles.jpg'
import mms from '../img/mms.jpg'
import kitkat from '../img/kitkat.jpeg'
import cheetos from '../img/cheetos.jpeg'
import doritos from '../img/doritos.jpeg'
import fritos from '../img/fritos.jpeg'

const Items = ({items}) => {

    const itemList = items.length ? (
        items.map((item) => {
            if (item.quantity === 0) {
                return (
                    <div className="col-xs-4">
                    <div className="item text-center out-of-stock">
                        <span>OUT OF STOCK</span>
                    </div>
                    </div> 
                )
            } else {
            switch (item.name){
                case 'Pepsi':
                    return (
                        <div className="col-xs-4">
                        <div className="item">
                            <img src={pepsi} alt=""/>
                            <div className="badge item-qty">{item.quantity}</div>
                        </div>
                        </div>
                    )
                case 'O. Spray':
                    return (
                        <div className="col-xs-4">
                        <div className="item">
                            <img src={oceanspray} alt=""/>
                            <div className="badge item-qty">{item.quantity}</div>

                        </div>
                        </div>
                )
                case 'Mt. Dew':
                    return (
                        <div className="col-xs-4">
                        <div className="item">
                            <img src={mtdew} alt=""/>
                            <div className="badge item-qty">{item.quantity}</div>

                        </div>
                        </div>
                )
                case 'CRUNCH':
                    return (
                        <div className="col-xs-4">
                        <div className="item">
                            <img src={crunch} alt=""/>
                            <div className="badge item-qty">{item.quantity}</div>

                        </div>
                        </div>
                )
                case 'Milky Way':
                    return (
                        <div className="col-xs-4">
                        <div className="item">
                            <img src={milkyway} alt=""/>
                            <div className="badge item-qty">{item.quantity}</div>

                        </div>
                        </div>
                )
                case 'Snickers':
                    return (
                        <div className="col-xs-4">
                        <div className="item">
                            <img src={snickers} alt=""/>
                            <div className="badge item-qty">{item.quantity}</div>

                        </div>
                        </div>
                )
                case 'Skittles':
                    return (
                        <div className="col-xs-4">
                        <div className="item">
                            <img src={skittles} alt=""/>
                            <div className="badge item-qty">{item.quantity}</div>

                        </div>
                        </div>
                )
                case 'M & Ms':
                    return (
                        <div className="col-xs-4">
                        <div className="item">
                            <img src={mms} alt=""/>
                            <div className="badge item-qty">{item.quantity}</div>

                        </div>
                        </div>
                )
                case 'Kit-Kat':
                    return (
                        <div className="col-xs-4">
                        <div className="item">
                            <img src={kitkat} alt=""/>
                            <div className="badge item-qty">{item.quantity}</div>
                        </div>
                        </div>
                )
                case 'Cheetos':
                    return (
                        <div className="col-xs-4">
                        <div className="item">
                            <img src={cheetos} alt=""/>
                            <div className="badge item-qty">{item.quantity}</div>

                        </div>
                        </div>
                )
                case 'Doritos':
                    return (
                        <div className="col-xs-4">
                        <div className="item">
                            <img src={doritos} alt=""/>
                            <div className="badge item-qty">{item.quantity}</div>

                        </div>
                        </div>
                )
                case 'Fritos':
                    return (
                        <div className="col-xs-4">
                        <div className="item">
                            <img src={fritos} alt=""/>
                            <div className="badge item-qty">{item.quantity}</div>

                        </div>
                        </div>
                )
                default:
                    return(
                        <div className="col-xs-4">
                        <div className="item">
                            <span>{item.name}</span>
                            <span>{item.quantity}</span>
                        </div>
                        </div>  
                ) 

            }}
        })   
    ) : (
        <p>There are no items to buy</p>
    )
    
    
    return(
            <div className="row">
                <div className="item-list">
                {itemList}
                </div>
            </div>
    )
    }

export default Items