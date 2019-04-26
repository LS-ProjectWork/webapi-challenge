const express = require('express');
const server = express();
const actionsRouter = require('./routers/actions-router');
const projectsRouter = require('./routers/project-router');

server.use(express.json());

server.use('/api/actions', actionsRouter)
server.use('/api/projects', projectsRouter)

server.get('/', (req, res) => {
    res.status(200).send('This is my homepage')
})

server.listen(7000, (req, res) => {
    console.log("Server is listening on port 7000!")
})