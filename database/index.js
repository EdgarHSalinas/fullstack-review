const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var kittySchema = mongoose.Schema({
  name: String
});

var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); 


mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are Connected');
});
// let repoSchema = mongoose.Schema({
//   // TODO: your schema here!
// });

// let Repo = mongoose.model('Repo', repoSchema);

// let save = (/* TODO */) => {
//   // TODO: Your code here
//   // This function should save a repo or repos to
//   // the MongoDB
// }

// module.exports.save = save;