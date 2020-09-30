import React, { Component } from 'react';
import './styles/shopMenuItem.css'
import { Link } from "react-router-dom";

class ShopMenuItem extends Component {
    state = {}
    render() {
        //console.log(image);
        return (
            <React.Fragment>
                <div className="shopMenuItemContainer">
                    <Link to={{
                        pathname: "/shopItem",
                        state: {
                            image: this.props.image,
                            price: "$19.99",
                            title: "FAB Logo T-Shirt"
                        }
                    }}>
                        <button className="itemButton">
                            <img src={this.props.image} className="itemImg" />
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