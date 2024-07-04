const express = require('express');
const path = require('path');
const client = require('./db')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
const userRouter = require('./routes/userRoute');
app.use('/', userRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`SERVER RUNNING PORT: ${PORT}`));
