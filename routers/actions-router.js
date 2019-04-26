const express = require('express');
const actions = require('../data/helpers/actionModel')

const router = express.Router();

router.get('/', (req, res) => {
    actions.get()
    .then(action => {
        res.status(200).json(action)
    })
    .catch(() => {
        res.status(400).send('You did something wrong')
    })
})

router.post('/', (req, res) => {
    actionDetails = req.body
    console.log(req.body)
    actions.insert(actionDetails)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(() => {
        res.status(500).send('You did something wrong')
    })
    
})

router.delete('/:id', (req, res) => {
    actionId = req.params.id
    actions.remove(actionId)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(() => {
        res.status(400).send('You did something wrong')
    }) 
})

router.put('/:id', (req, res) => {
    actionId = req.params.id
    changes = req.body
    actions.update(actionId, changes)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(() => {
        res.status(400).send('You did something wrong')
    })
})

module.exports = router;