require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const orderRouter = require('./routes/orders');
const authRouter = require('./routes/auth');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/api/login', authRouter);
app.use('/api/orders', orderRouter);

// Connect to MongoDB
const mongoUrl = process.env.MONGO_URL;
if (!mongoUrl) {
    console.error("MONGO_URL is not defined in the environment variables.");
    process.exit(1);
}

mongoose.connect(mongoUrl)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    });