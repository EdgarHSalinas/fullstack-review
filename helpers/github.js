const request = require('request');
const config = require('./config.js');

var getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
      // 'Accept': 'application/vnd.github.v3+json',
    }
  };
  // request(options, callback);

  request(options, function(err, response, body) {
    console.log('err', err);
    console.log('err', response);
    console.log('err', body);
    callback(err, response, body);
  });

//   //   .then(({ data }) => {
// //      const results = [];
// //      console.log(results);
// //      return results;
// //   });


// };

// const getReposByUsername = function(username) {
//   axios.get(`https://api.github.com/users/${username}`, {
//     headers: {
//     'Authorization': `token ${config.TOKEN}`,
  
//   }
// })
//   .then(({ data }) => {
//      const results = [];
//      console.log(results);
//      return results;
//   });
// }

module.exports.getReposByUsername = getReposByUsername;