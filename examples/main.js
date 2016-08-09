'use strict';

const fs = require('fs');
const random = require('./lib/random');
let path = './';

const readFilePromise = (filename, options) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, options, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const writeFilePromise = (filename, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};


readFilePromise('./data.json', { encoding: 'utf-8' })
  .then(data => {
    var currList = JSON.parse(data);
    return currList.map(curr => {
      if (curr.ID === 'R01589') {
        curr.Value = random(10, 500);
      }
      return curr;
    });
  })
  .then(currList => writeFilePromise('./data.json', JSON.stringify(currList)))
  .then(() => console.log('Валюта ZZZ изменена!'))
  .catch(err => console.error(err));

