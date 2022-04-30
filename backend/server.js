import express from 'express';
import data from './data';
import dotenv from 'dotenv'
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';

dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true, 
    useCreateIndex: true, 
}).catch(error => console.log(error.reason));

const app = express();

app.use("/api/users",userRoute);
app.get("/api/hotels/:id",(req, res) => {
    const hotelId = req.params.id;
    const hotel = data.hotels.find(x=>x._id === hotelId);
   if(hotel){
    res.send(hotel);
   }
   else{
       res.send(404).send({ msg :"Hotel Not Found"})
   }
});
app.get("/api/hotels",(req, res) => {
    res.send(data.hotels);
});

app.listen(5000,()=>{console.log('server started')})