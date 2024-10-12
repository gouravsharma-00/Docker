// JavaScript: Docker

import express from 'express';
const PORT = process.env.PORT || 3000;
const App = express()

App.get('/', (req, res) => {
    res.json({ message: 'Docker is easy 🐳'})
})

App.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})