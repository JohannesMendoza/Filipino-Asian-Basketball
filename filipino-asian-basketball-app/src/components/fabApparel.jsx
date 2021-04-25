import React, { Component } from 'react';
import ShopMenuItem from './shopMenuItem'
import TShirtImage from '../images/FAB Logo T-Shirt.jpg'
import braceletImage from '../images/bracelet.jpg'
import "./styles/fabApparel.css"
class FABApparel extends Component {
    state = {}
    render() {
        return (
            <div className="shopContent">
                <ShopMenuItem image={TShirtImage} id={"logotshirtwhite"} price={19.24} title={"FAB Logo T-Shirt"} />
                <ShopMenuItem image={braceletImage} id={"fabbracelet"} price={5.99} title={"FAB Bracelet"} />
                <ShopMenuItem image={TShirtImage} id={"logotshirtwhite"} price={19.24} title={"FAB Logo T-Shirt"} />
                <ShopMenuItem image={braceletImage} id={"fabbracelet"} price={5.99} title={"FAB Bracelet"} />
                <ShopMenuItem image={TShirtImage} id={"logotshirtwhite"} price={19.24} title={"FAB Logo T-Shirt"} />
                <ShopMenuItem image={braceletImage} id={"fabbracelet"} price={5.99} title={"FAB Bracelet"} />
                <ShopMenuItem image={TShirtImage} id={"logotshirtwhite"} price={19.24} title={"FAB Logo T-Shirt"} />
                <ShopMenuItem image={braceletImage} id={"fabbracelet"} price={5.99} title={"FAB Bracelet"} />
                <ShopMenuItem image={TShirtImage} id={"logotshirtwhite"} price={19.24} title={"FAB Logo T-Shirt"} />
                <ShopMenuItem image={braceletImage} id={"fabbracelet"} price={5.99} title={"FAB Bracelet"} />
            </div>
        );
    }
}

export default FABApparel;