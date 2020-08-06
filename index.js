// const axios = require('axios')

// exports.torrent = (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.set({
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*'
//   })
//   let id = req.query.imdb_id
//   axios({
//     method: 'GET',
//     url: 'https://yts-am-torrent.p.rapidapi.com/list_movies.json',
//     headers: {
//       'content-type': 'application/octet-stream',
//       'x-rapidapi-host': 'yts-am-torrent.p.rapidapi.com',
//       'x-rapidapi-key': 'e3f3918094mshd9ac32aa0744d2fp141a50jsnbeafa4d56abe'
//     },
//     params: {
//       query_term: id
//     }
//   })
//     .then(response => {
//       if (response.data) {
//         res.json(response.data)

//       } else {
//         res.send(response)
//       }
//     })
//     .catch(error => {
//       console.log(error)
//       res.send(error)
//     })
//   // let message = req.query.message || req.body.message || 'Hello World!';
//   // res.status(200).send(message);
// };

'use strict'

const express = require('express')
const fetch = require("node-fetch");
const app = express();
const port = 3000

app.get('/torrent', (req, res, body) => {
  let id = req.query.imdb_id
  var results = {}
  fetch(`https://yts-am-torrent.p.rapidapi.com/list_movies.jsonp?query_term=${id}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "yts-am-torrent.p.rapidapi.com",
      "x-rapidapi-key": "e3f3918094mshd9ac32aa0744d2fp141a50jsnbeafa4d56abe"
    }
  })
    .then(response => {
      return results = response
      // res.status(200).send(response);
    })
    .catch(err => {
      return results = err
      // res.status(404).send(err);
    });
  res.json(results)
})


app.listen(port)
console.log(`http://localhost:${port}`);
exports = module.exports = app;
