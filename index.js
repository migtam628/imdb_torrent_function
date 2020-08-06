const axios = require('axios') 
const express = require('express')
const fetch = require("node-fetch");
const app = express();
const port = 5001

app.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
  let id = req.query.imdb_id
  axios({
    method: 'GET',
    url: 'https://yts-am-torrent.p.rapidapi.com/list_movies.json',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'yts-am-torrent.p.rapidapi.com',
      'x-rapidapi-key': 'e3f3918094mshd9ac32aa0744d2fp141a50jsnbeafa4d56abe'
    },
    params: {
      query_term: id
    }
  })
    .then(response => {
      if (response.data) {
        res.json(response.data)

      } else {
        res.send(response)
      }
    })
    .catch(error => {
      console.log(error)
      res.send(error)
    })
  // let message = req.query.message || req.body.message || 'Hello World!';
  // res.status(200).send(message);
})

app.listen(port)
console.log(`http://localhost:${port}`);

