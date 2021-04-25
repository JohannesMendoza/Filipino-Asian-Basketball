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
                <img className="shopItemImage" src={this.props.history.location.state.image} />
                <div className="shopItemDetails">
                    <h1 className="shopItemTitle">{this.props.history.location.state.title}</h1>
                    <p className="shopItemPrice">{this.props.history.location.state.price}</p>
                    <label for="size">Size: </label>
                    <select id="size" name="size">
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="L">L</option>
                        <option value="xl">XL</option>
                    </select>
                    <button className="addToCart">Add to Cart</button>
                </div>
            </div>
        );
    }
}

export default ShopItem;
