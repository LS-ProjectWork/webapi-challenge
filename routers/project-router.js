const express = require('express');
const router = express.Router();
const projects = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
    projects.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(() => {
        res.status(400).send('You did something wrong')
    })
})

module.exports = router