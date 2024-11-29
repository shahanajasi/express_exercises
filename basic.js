// Middleware in Express.js is a function that executes during the request-response 
// lifecycle in a web application. It processes incoming requests, modifies responses,
// or handles other tasks such as authentication, logging, or error handling before 
// passing control to the next middleware or route handler.
// here we use `use` as middleware------app.use

const express = require('express');
const app = express();

app.use(express.json())

// let datas = []
let datas = [{ id: 1, name: "Shahana jasni", email: "jasni@gmail.com.com" },
            { id: 2, name: "shahanas", email: "shahanas@gmail.com" }]

// app.get('/',(req,res)=>{
//     res.send(datas)
// })


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, World!', data: datas });
});

// app.post('/post', (req, res) => {
//     const data = req.body
//     datas.push(data)
//     res.send(datas);
// });

// app.put('/put', (req, res) => {
//     res.send("PUT Request Called")
// })


app.listen(3000,()=>{
    console.log(`the server is running on http://localhost:3000`)
})