import express from 'express';
import data from './data';

const app = express();

app.get("/api/hotels",(req, res) => {
    res.send(data.hotels);
});

app.listen(5000,()=>{console.log('server started')})