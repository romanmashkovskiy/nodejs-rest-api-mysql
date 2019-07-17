const express = require('express');
const cors = require('./utils/cors');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(cors);
app.use('/api', userRouter);

app.listen(4000, () => {
    console.log('Server is waiting for connection at localhost: 4000');
});



