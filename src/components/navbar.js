import React from 'react'

const Navbar = () => {

    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Vending Machine</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse navbar-right">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#about">Banking</a></li>
                        <li><a href="#contact">About</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar