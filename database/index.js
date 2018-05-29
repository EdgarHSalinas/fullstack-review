const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// var Promise = require('bluebird'); 
// Promise.promisifyAll(mongoose);

mongoose.connect('mongodb://localhost:27017/github');

var repoSchema = new Schema({
  username: String,
  repos_url: Array

});

var Repo = mongoose.model('Repo', repoSchema);

let save = (repoData) => {
  var repos = new Repo(repoData);

  repos.save()
    .then((data) => console.log(data))
    .catch ((err) => console.log(err));
};

var query = (callback) => {
  Repo.find().sort().exex(callback);
}

module.exports.save = save;
module.exports.query = query;