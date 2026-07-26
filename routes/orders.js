const express = require('express');
const router = express.Router();
const Order = require('../models/IceCream'); // pas pad aan als je model anders heet

router.post('/', async (req, res) => {
    try {
        const order = new Order({
            customerName: req.body.customerName,
            address: req.body.address,
            smaak: req.body.smaak,
            toppings: req.body.toppings || [],
            saus: req.body.saus || "",
            totalPrice: req.body.totalPrice,
            status: 'te verwerken'
        });
        const saved = await order.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Haal alle bestellingen op
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Haal 1 bestelling op via ID
router.get('/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: 'Bestelling niet gevonden' });
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;