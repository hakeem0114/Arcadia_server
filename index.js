// //Setup Imports
// const express = require('express')
// const cors = require('cors')


// const bodyParser = require('body-parser')
//             require('dotenv').config()

//             const app  = express()
//             app.use(express.static('public'));
//             app.use(express.json())
//             app.use(express.urlencoded({
//                 extended:true
//               })) //Fix req.body error body parser error
        
//             app.use(bodyParser.json({
//                 limit:"30mb", 
//                 extended: true 
//             }))
        
//             //Fix req.body error body parser error like in Smoothie Bar practice project
//             app.use(bodyParser.urlencoded({
//                 limit:"30mb",
//                 extended:true
//             }))
        
//             //CORS
//             //Remove any friction when accessing resourcing from client to back-end
//             app.use(cors({
//                 origin: '*',
//                 methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
//             }))


// //Express routes
// app.get('/', (req, res)=>{
//     res.send('Hello World')
// })

// app.get('/test', (req, res)=>{
//     res.send('Test2')
// })

// //console.log(process.env.STRIPE_API_KEY)
// //Stripe
// const Stripe = require('stripe');
// const stripe = Stripe(process.env.STRIPE_API_KEY)
// //Receive the POST rev at <domain.name>/payment
// app.post('/payment', async(req, res)=>{
//     console.log(req.body)
    
//     await stripe.charges.create({
//         source:req.body.token.id,
//         amount: req.body.amount,
//         currency: 'cad'
//     })
//     console.log(res.body)
//     res.send('Post req received on server')
// })

// //Start Server
// const port = process.env.PORT || 8080
// app.listen(port, ()=>{
//     console.log(`Server running on PORT = ${port}`)
// })

const express = require("express");
const cors = require("cors");
const app  = express();


app.use(cors())

const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));


const Stripe = require("stripe")(process.env.STRIPE_API_KEY);


app.post("/pay", async(req, res)=>{
    console.log(req.body)

    await Stripe.charges.create({
        source: req.body.token.id,
        amount: req.body.amount,
        currency:  "usd"
    });
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Headers', 'POST');

   // console.log(res.json())
});


app.get('/', (req, res)=>{
    res.send('Hello World')
})

//Start Server
app.listen(port, ()=>{
    console.log(`Server running on PORT = ${port}`)
})
