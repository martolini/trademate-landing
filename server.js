import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

export const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json())
app.use(cookieParser())

app.use((req, res, next) => {
  if (req.query.ref) {
    res.cookie('__trademate__affiliate', req.query.ref)
  }
  next()
})

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/core', (req, res) => {
  res.render('core')
})

app.get('/pro', (req, res) => {
  res.render('pro')
})
