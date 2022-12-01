## [lodash](https://lodash.com/)
An utility library that eases working with basic data structures, like arrays, numbers, strings.

```
const _ = require("lodash");

const nums = _.range(1, 9);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9]

const chunks = _.chunk(nums, 3);
// => [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const right = _.takeRight(nums, 2);
// => [7, 8, 9]
```

## [nodemon](https://nodemon.io/)
A tool that automatically restarts  a node application when any change is saved in its directory

```
nodemon ./server.js 
```

## Express
The most popular NodeJS framework for creating backend servers

```
const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);
```