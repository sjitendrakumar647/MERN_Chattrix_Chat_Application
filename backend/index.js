import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import UserRoute from './routes/User.route.js';

const app = express()

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
app.use(express.json())

//routes
app.get('/', (req, res) => {
  res.send('Welcome to Chattrix chat application!')
})

app.use('/user', UserRoute) // user route middleware

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})