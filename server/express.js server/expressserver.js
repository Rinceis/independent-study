const express = require('express')
var serveStatic = require('serve-static')
const app = express()

const port = 3000


app.get('/', (req, res) => {
  res.send('Testing, testing, 1 2 3.')
})

app.get('/info', (req, res) => {
  res.send('Will probably be using different URI references to test different integrations of the various third party apps.
So, for example, adding /twitter to the end of the url would lead to a page with some form of twitter integration.')
})
app.get('/twitter', (req, res) => {
  res.send('Like this, see? Though it's not entirely set up yet, obviously.')
})

app.get('/index', (req, res) => {
  res.send('Page showing all the various integrations I've made available?')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})