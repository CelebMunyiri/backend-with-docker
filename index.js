const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/config')
const cors = require('cors')
const routes = require('./routes')

const app = express();

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/', routes)

const PORT = process.env.PORT || 5000;

connectDB()
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
