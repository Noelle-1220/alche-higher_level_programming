#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  const todos = JSON.parse(body);
  const completedCount = {};

  todos.forEach((todo) => {
    if (todo.completed) {
      completedCount[todo.userId] = (completedCount[todo.userId] || 0) + 1;
    }
  });

  console.log(completedCount);
});
