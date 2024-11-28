const express = require('express');
const app = express();

app.use(express.json())

let datas = [{ id: 1, name: "Shahana jasni", email: "jasni@gmail.com.com" },
    { id: 2, name: "shahanas", email: "shahanas@gmail.com" },
    { id: 3, name: "ali", email: "ali@gmail.com" }]

app.get('/', (req, res) => {
    res.send(datas);

});

app.post('/post', (req, res) => {
    const data = req.body
    datas.push(data)
    res.send(datas);
});                                 //{
                                    //     "id": 3,
                                    //     "name": "Ali",
                                    //     "email": "ali@example.com"
                                    // }

app.put('/put', (req, res) => {
const data = req.body
datas.push(data)
res.send(datas);
});                                 


app.delete('/delete', (req, res) => {
    const data = req.body
    datas.pop(data)
    res.send(datas)
})


app.listen(3000,()=>{
    console.log(`the server is running on http://localhost:3000`)
})