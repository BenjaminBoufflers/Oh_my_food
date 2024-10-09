import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import http from 'http'
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const server = http.createServer(app);

const connectDB = async() => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_DB_API);
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

server.listen(5050, () => {
  console.log("Server running")
})

connectDB();

