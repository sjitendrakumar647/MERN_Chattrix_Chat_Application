import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
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

app.get('/', (req, res) => {
  res.send('Welcome to Chattrix chat application!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})