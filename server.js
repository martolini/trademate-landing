import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import firebase from 'firebase'

export const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json())
app.use(cookieParser())

app.use((req, res, next) => {
  if (req.query.ref) {
    res.cookie('__trademate__referrer', req.query.ref, {
      domain: process.env.NODE_ENV === 'production' ? 'tradematesports.com' : 'localhost'
    })
    firebase.database().ref('reflinks').child(req.query.ref).transaction(current => {
      if (current === null) {
        return { clicks: 1, signups: 0, transactions: 0 }
      }
      return Object.assign({}, current, { clicks: current.clicks + 1})
    })
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
