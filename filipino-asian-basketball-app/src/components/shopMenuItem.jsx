import React, { Component } from 'react';
import TShirtImage from '../images/FAB Logo T-Shirt.jpg'
import './styles/shopMenuItem.css'

class ShopMenuItem extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="shopMenuItemContainer">
                    <button className="itemButton">
                        <img src={TShirtImage} className="itemImg" />
                        <p className="itemTitle">FAB Logo T-Shirt</p>
                        <p className="itemPrice">$19.99</p>
                    </button>
                </div>
            </React.Fragment>
        );
    }
}

export default ShopMenuItem;