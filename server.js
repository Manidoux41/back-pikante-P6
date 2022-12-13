import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
dotenv.config({ path: "./config/.env" });


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/api', (req,res,next) => {
    res.json({msg: 'This is CORS-enabled for all origins!'})
})


mongoose.set('strictQuery', false);
mongoose
  .connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PWD}@tutonode.xukrw0x.mongodb.net/${process.env.MONGODB_DATANAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true
  })
  .then(() =>{
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => console.log(`connect to db successfull and listening on port: ${PORT}`))
  })
  .catch(err => console.log('Failed to connect DB'))  











