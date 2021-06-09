const express = require("express");
const router = express.Router();
//port = require('../portHeader.js')
//res.header("Access-Control-Allow-Origin", "*");


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fab')
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err => console.error('Could not connect to MongoDDB...', err)));

//Schema

const shopItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    tags: [String],
    pathName: String
});

const ShopItem = mongoose.model('ShopItem', shopItemSchema);

async function createShopItem(nm, pr, desc, tgs, pn) {
    const item = new ShopItem({
        name: nm,
        price: pr,
        description: desc,
        tags: tgs,
        pathName: pn
    });

    const result = await item.save();
    console.log(result);
}

async function getShopItems() {
    const items = await ShopItem
        .find()
    return items;
}

//createShopItem('FAB Bracelet', 10, 'Red Bracelet with Yellow Tags', ['bracelet'], 'fab-bracelet');


router.get('/', (req, res) => {
    console.log("SHOP ITEMS REQUEST RECEIVED")
    getShopItems().then(items => {
        res.send(items);
    })
})

module.exports = router;