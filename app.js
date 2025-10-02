const http= require('http')
const mongoose = require('mongoose');
const config = require('./dbConfig');
const express = require('express');
const dotenv = require('dotenv');
const userRoutes= require('./user.routes')

const app= express()
dotenv.config();

config.connectDB();

app.get('/', (req, res)=>{
    res.send('Reminder active')
})

app.use('/api/v1/users' ,userRoutes)


const PORT=process.env.PORT

const server =http.createServer(app)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})