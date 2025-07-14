const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const orderRoutes = require('./routes/order');
dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Backend!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.json());
app.use('/api/v1/order/', orderRoutes);