import express from 'express'
import path from 'path'

export const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/core', (req, res) => {
  res.render('core')
})

app.get('/pro', (req, res) => {
  res.render('pro')
})
