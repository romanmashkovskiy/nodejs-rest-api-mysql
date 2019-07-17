const express = require('express');
const userController = require('../controllers/userController');
const bodyParser = require('body-parser');
const userRouter = express.Router();

const jsonParser = bodyParser.json();

userRouter.get('/users', userController.list);
userRouter.get('/users/:id', userController.get);
userRouter.post('/users', jsonParser, userController.create);
userRouter.delete('/users/:id', userController.delete);
userRouter.put('/users', jsonParser, userController.update);

module.exports = userRouter;