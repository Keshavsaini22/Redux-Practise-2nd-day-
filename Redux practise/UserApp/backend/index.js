const mongoose = require('mongoose')
const express = require('express')


const UserModel = require('./model/User')
const app = express()
const port = 8000
const url = "mongodb+srv://keshavsainikesu:Imhater@cluster0.kbdcnn3.mongodb.net/?retryWrites=true&w=majority"
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
try {
    mongoose.connect(url);
    console.log("connected to mongodb")
}
catch (error) {
    console.error(error);
}
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/users', async (req, res) => {
    console.log("first")
    console.log(req.body)
    const data = req.body
    try {
        const newUser = await UserModel.create(data)
        res.status(200).json(newUser)
    }
    catch (e) {
        res.status(401).json(e)
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})