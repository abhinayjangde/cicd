import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'Product A', price: 100 },
        { id: 2, name: 'Product B', price: 150 },
        { id: 3, name: 'Product C', price: 200 },
    ];
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});