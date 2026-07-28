const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        // --- Klantgegevens ---
        customerName: {
            type: String,
            required: true,
            trim: true
        },
        address: {
            street: { type: String, required: true, trim: true },
            houseNumber: { type: String, required: true, trim: true },
            postalCode: { type: String, required: true, trim: true },
            city: { type: String, required: true, trim: true }
        },

        // --- Configurator keuzes (geen referenties, gewoon tekst) ---
        smaak: {
            type: String,
            required: true,
            trim: true
        },
        toppings: {
            type: String,
            default: []
        },
        saus: {
            type: String,
            default: "",
            trim: true
        },

        // --- Prijs & status ---
        totalPrice: {
            type: Number,
            required: true,
            min: 0
        },
        status: {
            type: String,
            enum: ["Te verwerken", "Verzonden", "Geannuleerd"],
            default: "Te verwerken"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Order", orderSchema);