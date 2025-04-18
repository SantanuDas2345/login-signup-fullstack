const bodyParser = require('body-parser');
const express = require('express')
require('dotenv').config();
const cors = require('cors')
require('./Models/db.js')
const AuthRouter = require('./Routes/AuthRouter.js')
const ProductRouter = require('./Routes/ProductRouter.js')

const app = express();

const port = process.env.PORT || 8080

app.get('/hello',(req,res)=> {
    res.send("hello");
    console.log("hello");
    
})

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter)

app.listen(port,()=> {
    console.log(`server is running at port ${port}`);
})