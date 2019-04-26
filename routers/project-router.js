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

router.post('/', (req, res) => {
    newProject = req.body
    projects.insert(newProject)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(() => {
        res.status(400).send('You did something wrong')
    })
})

router.delete('/:id', (req,res) => {
    projects.remove(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(() => {
        res.status(400).send('You did something wrong')
    })
})

router.put('/:id', (req, res) => {
    projectId = req.params.id
    changes = req.body
    projects.update(projectId, changes)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(() => {
        res.status(400).send('You did something wrong')
    })
})

router.get('/:id', (req, res) => {
    projects.getProjectActions(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(() => {
        res.status(400).send('You did something wrong')
    })
})

module.exports = router