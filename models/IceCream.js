const mongoose = require('mongoose')

const IceCreamSchema = new mongoose.Schema({
    taste: String,
    toppings: String,
    sauce: String,
    user: String,
    adress: String,
    status: { type: String, default: 'pending' },
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('IceCream', IceCreamSchema)