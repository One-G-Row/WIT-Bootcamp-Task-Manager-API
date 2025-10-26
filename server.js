const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()

//Middleware
app.use(express.json())

//Connect to Mongodb
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅Connectedto MongoDB'))
    .catch((err) => console.error('❌MongoDB connection error:', err))

//Routes
app.use('/api/tasks', require('./routes/tasks'))

//Error  handling middleware(should be last)
app.use(require(`./middleware/errorHandler`))

//Start server
const PORT =  process.env.PORT|| 5000;
app.listen(PORT, () => {
    console.log(`�Server running on port ${PORT}`);
})