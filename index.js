const express = require('express');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).send('This is my homepage')
})

server.listen(7000, (req, res) => {
    console.log("Server is listening on port 7000!")
})