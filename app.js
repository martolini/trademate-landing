import { app } from './server'
import firebase from 'firebase'

firebase.initializeApp({
  serviceAccount: "./trademate-61caa0e095ad.json",
  databaseURL: "https://trademate-27ec1.firebaseio.com/"
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Listening on port %s', PORT)
})
