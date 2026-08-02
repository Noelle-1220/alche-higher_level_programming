#!/usr/bin/node
const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const path = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  fs.writeFile(path, body, 'utf8', (err) => {
    if (err) {
      console.log(err);
    }
  });
});
