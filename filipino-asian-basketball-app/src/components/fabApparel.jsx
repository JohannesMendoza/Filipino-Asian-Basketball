import React, { Component } from 'react';
import ShopMenuItem from './shopMenuItem'
import TShirtImage from '../images/FAB Logo T-Shirt.jpg'
import braceletImage from '../images/bracelet.jpg'
class FABApparel extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <ShopMenuItem image={TShirtImage} />
                <ShopMenuItem image={braceletImage} />
                <ShopMenuItem image={TShirtImage} />
                <ShopMenuItem image={braceletImage} />
                <ShopMenuItem image={TShirtImage} />
                <ShopMenuItem image={braceletImage} />
                <ShopMenuItem image={TShirtImage} />
                <ShopMenuItem image={braceletImage} />
                <ShopMenuItem image={TShirtImage} />
                <ShopMenuItem image={braceletImage} />
                <ShopMenuItem image={TShirtImage} />
                <ShopMenuItem image={braceletImage} />
                <ShopMenuItem image={TShirtImage} />
                <ShopMenuItem image={braceletImage} />
                <ShopMenuItem image={TShirtImage} />
                <ShopMenuItem image={braceletImage} />
            </React.Fragment>
        );
    }
}

export default FABApparel;