import React, { Component } from 'react';
import TShirtImage from '../images/FAB Logo T-Shirt.jpg'
import './styles/shopMenuItem.css'
import { Link } from "react-router-dom";

class ShopMenuItem extends Component {
    state = {}
    render() {
        console.log(TShirtImage);
        return (
            <React.Fragment>
                <div className="shopMenuItemContainer">
                    <Link to={{
                        pathname: "/shopItem",
                        state: {
                            image: TShirtImage,
                            price: "$19.99",
                            title: "FAB Logo T-Shirt"
                        }
                    }}>
                        <button className="itemButton">
                            <img src={TShirtImage} className="itemImg" />
                            <p className="itemTitle">FAB Logo T-Shirt</p>
                            <p className="itemPrice">$19.99</p>
                        </button>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default ShopMenuItem;