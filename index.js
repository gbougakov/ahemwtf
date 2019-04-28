const express = require('express')
const isBot = require('isbot')

const app = express()

app.get('*', (req, res) => {
  if (!isBot(req.headers['user-agent'])) {
    res.send(200, '<p class="text-align: center">a domain for random shit and emails by <a href="https://bygeorgenet.me">George Bougakov</a></p>')
  } else {
    res.sendFile('ahem.gif')
  }
})

module.exports = app