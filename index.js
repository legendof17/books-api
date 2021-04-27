const express = require('express')

const app = express()

app.use(express.json())

const books = [
    {title: 'Java Programming', id: 1},
    {title: 'C# Programming', id: 2},
    {title: 'Node JS Programming', id: 3},
]

app.get('/', (req, res) => {
    res.send('Books API : REST API with Node JS')
})

app.get('/api/books', (req, res) => {
    res.send(books)
})

app.get('/api/books/:bookId', (req,res) => {
    const book = books.find(item => item.id === parseInt(req.params.bookId))
    if(!book) res.status(404).send('Book not found')
    res.send(book)
})

app.listen(3030)