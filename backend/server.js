import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './Router/userRouter.js';
import productRouter from './Router/productRouter.js';
import orderRouter from './Router/orderRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const url = "mongodb+srv://lokesh_2052:lokesh_2052@cluster0.mvtfn.mongodb.net/ecommerce?retryWrites=true&w=majority"


//  useCreateIndex:true
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/users",userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next)=>{
  res.status(500).send({message:err.message});
}); 

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

