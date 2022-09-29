const express = require('express')
const app = express()
const SERVER_PORT = 3001

app.get('/', (req, res) =>{
    res.send('<h1>Welcome to Lab Exercise 04</h1>')
})

app.get('/hello', (req, res) =>{
    res.send("Hello Express JS")
})

app.get("/user",(req, res) => {
    const firstName = req.query.firstName
    const lastName = req.query.lastName

    res.send({
        firstName,
        lastName
    })
})

app.post("/user/:firstName/:lastName",(req, res) => {
    const firstName = req.params.firstName
    const lastName = req.params.lastName

    res.send({
        firstName,
        lastName
    })
})

app.listen(SERVER_PORT, () =>{
    console.log(`Server is running at http://localhost:${SERVER_PORT}/`)
})