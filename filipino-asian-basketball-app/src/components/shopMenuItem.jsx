import React, { Component } from 'react';
import './styles/shopMenuItem.css'
import { Link } from "react-router-dom";

class ShopMenuItem extends Component {
    state = {}
    render() {
        //console.log(image);
        const title = this.props.title;
        console.log(this.props.title);
        return (
            <React.Fragment>
                <div className="shopMenuItemContainer">
                    <Link to={{
                        pathname: "/shopItem/" + this.props.id,
                        state: {
                            image: this.props.image,
                            price: this.props.price,
                            title: this.props.title,
                            id: this.props.id
                        }
                    }}>
                        <button className="itemButton">
                            <img src={this.props.image} className="itemImg" />
                            <p className="itemTitle">{title}</p>
                            <p className="itemPrice">${this.props.price}</p>
                        </button>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}


export default ShopMenuItem;