import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import UserRoute from './routes/User.route.js';
import MessageRoute from './routes/message.route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { app,server } from './SocketIO/server.js';


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true // Allow cookies to be sent
})); //enable cors for all routes

dotenv.config();
const PORT = process.env.PORT || 5000; 
const URI = process.env.MONGODB_URI;


try{
    mongoose.connect(URI)
    console.log('MongoDB connected...');
} catch(err) {
    console.error(err.message)
    process.exit(1)
}

//middlewares
app.use(express.json());

//cookie-parser middleware
app.use(cookieParser());
//routes
app.get('/', (req, res) => {
  res.send('Welcome to Chattrix chat application!')
})

app.use('/user', UserRoute) // user route middleware
app.use('/message', MessageRoute)

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});