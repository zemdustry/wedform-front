//Install express server
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 12080;

console.log("###########");
console.log(path.dirname);
console.log("----------");
console.log(path.basename);
console.log("###########");

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);

// const forceSSL = function () {
//   return function (req, res, next) {
//     if (req.headers['x-forwarded-proto'] !== 'https') {
//       return res.redirect(['https://', req.get('Host'), req.url].join(''));
//     }
//     next();
//   };
// };

// // For all GET requests, send back index.html so that PathLocationStrategy can be used
app.get('/*', function(req,res){
  const fullPath = path.join(__dirname + '/dist/index.html');
  console.log(" Fetching from.." + fullPath);
    res.sendFile(fullPath);
})

// // Instruct the app to use the forceSSL middleware
// // app.use(forceSSL());

// // Start the app by listening on the default Heroku port
// app.listen(port, () => {
  console.log(`Server is up and running at http://localhost:${port}/`);
// });
