const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// Connect to DB
mongoose.connect('mongodb+srv://kb:etg9wzGKwf8Rc1XG@cluster0.irvyv.mongodb.net/mydb?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
    console.log('Connected to DB')
});

// Import Routes
const listenRoutes = require('./routes/productRouter');
const userRoutes = require('./routes/userRoutes');

// Route Midlewares
app.use('/produtcs', listenRoutes);
app.use('/user', userRoutes);

app.listen(3000, () => {
    console.log('server up and running at port 4000');
})