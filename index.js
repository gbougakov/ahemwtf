const express = require('express')

const app = express()

app.get('*', (req, res) => {
    res.send(200, '<p class="text-align: center">a domain for random shit and emails by <a href="https://bygeorgenet.me">George Bougakov</a></p>')
})

module.exports = app