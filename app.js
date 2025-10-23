const http= require('http');
const config = require('./config/dbConfig');
const express = require('express');
const dotenv = require('dotenv');
const userRoutes= require('./user.routes')
const {scheduleJob} =require('./cron')

const app= express()
dotenv.config();

config.connectDB();
scheduleJob()


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res)=>{
    res.send('Reminder active')
})
 app.get('/input',(req,res)=>{
    res.sendFile(__dirname + '/public/register.html');
 })


app.use('/api/v1/users' ,userRoutes)


const PORT=process.env.PORT

const server =http.createServer(app)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})