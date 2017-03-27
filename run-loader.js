var path = require("path");
const fs = require('fs');
const { runLoaders } = require('loader-runner');

runLoaders({
  resource: './src/demo.txt',
  loaders: [
    path.resolve(__dirname, './build/loaders/demo-loader'),
  ],
  readResource: fs.readFile.bind(fs),
},
(err, result) => err ?
  console.error(err) :
  console.log(result)
);
