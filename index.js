const express = require('express')
const isBot = require('isbot')

const app = express()

app.get('/', (req, res) => {
  if (!isBot(req.headers['user-agent'])) {
    res.redirect('https://ahem.wtf/about')
  } else {
    res.redirect(302, 'https://ahem.wtf/gifs/wtf' + (Math.floor(Math.random() * 7) + 1) + '.gif')
  }
})
//app.listen(process.env.PORT
app.listen()
 