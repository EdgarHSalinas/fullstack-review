const express = require('express');
const app = express();

var bodyParser = require('body-parser');

var github = require('../helpers/github.js');
var db = require('../database/index.js');

// var mongoose = require('mongoose');
// var configDB = require('../configDB');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  var username = req.body.term;

  github.getReposByUsername(username, function(err, response, body) {
    if (err) { console.log(err); }

    body = JSON.parse(body);
    body.forEach( (repo) => {
      var repoData = {
      username: repo.owner.login,
      repo: repo.name,
      };
      db.save(repoData);
    });
    res.status(201).send('Success');
  });
});

app.get('/repos', function (req, res) {

  db.query(function(err, repos) {
    if (err) {console.log(err);}

    res.status(200).send(repos);
  });


});



app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

