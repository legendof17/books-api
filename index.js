const express = require('express')

const app = express()

app.use(express.json())

const books = [
    {title: 'Java Programming', id: 1},
    {title: 'C# Programming', id: 2}
]

app.get('/', (req, res) => {
    res.send('Books API : REST API with Node JS')
})

app.listen(3030)