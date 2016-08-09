const fs = require('fs');

fs.readdir('./', function(err, files) {
  if(err) return console.error(err);
  files.forEach(file => console.log(file));
});
