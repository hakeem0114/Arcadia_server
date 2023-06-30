const express = require("express");
const cors = require("cors");
const app  = express();


app.use(cors())
app.use(express.json()) //Access req as a json

const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));


const Stripe = require("stripe")(process.env.STRIPE_API_KEY);


app.post("/pay", async(req, res)=>{

    console.log(req.body.token)

    await Stripe.charges.create({
        source: req.body.token.id,
        amount: req.body.amount,
        currency:  "cad"
    });
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Headers', 'POST');

   // console.log(res.json())
   res.status(200).json('Stripe POST successful')
});


app.get('/', (req, res)=>{
    res.send('Hello World Test')
})

//Start Server
app.listen(port, ()=>{
    console.log(`Server running on PORT = ${port}`)
})
