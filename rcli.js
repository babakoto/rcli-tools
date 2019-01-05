#!/usr/bin/env node
let fs = require('fs')
const [,, ... args]=process.argv
    fs.open(`${args}.js`, 'w', function (err, file) {
        if (err) throw err;
      });
      fs.open(`${args}.css`, 'w', function (err, file) {
        if (err) throw err;
      });
      fs.open(`index.js`, 'w', function (err, file) {
        if (err) throw err;
      });
      console.log('Component created!');

