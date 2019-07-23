const express = require('express');
const cors = require('./utils/cors');
const userRouter = require('./routes/userRouter');
const sequelize = require('./db');

const app = express();

app.use(cors);
app.use('/api', userRouter);

sequelize.sync()
    .then(() => {
        app.listen(4000, () => {
            console.log('Server is waiting for connection at localhost: 4000');
        });
    })
    .catch(err => console.log(err));



