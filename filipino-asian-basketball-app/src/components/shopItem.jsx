import React, { Component } from 'react';
import './styles/shopItem.css'
class ShopItem extends Component {
    state = {}
    render() {
        console.log("Hello world");
        console.log('state', this.props.location.state);
        console.log(this.props);
        return (
            <div className="shopItemContainer">
                <h1>"hello world"</h1>
                <img className="shopItemImage" src={this.props.history.location.state.image} />
                <h1 className="shopItemTitle">{this.props.history.location.state.title}</h1>
                <p className="shopItemPrice">{this.props.history.location.state.price}</p>
            </div>
        );
    }
}

export default ShopItem;