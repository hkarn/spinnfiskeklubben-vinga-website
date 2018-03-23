// Include fs-extra package
console.log('Starting custom static copy');
let fs = require('fs-extra');
let path = require('path');

let source = path.join(__dirname, '/.next/static/');
let destination = path.join(__dirname, '/out/_next/static/');
console.log('Starting custom static copy');
// Copy source folder to destination
fs.copy(source, destination, function (err) {
  if (err) {
    console.log('An error occured copying .next static');
    return console.error(err);
  }
  console.log('.next static files copied to: ' + destination);
});

source = path.join(__dirname, '/root-static/');
destination = path.join(__dirname, '/out/');

// Copy source folder to destination
fs.copy(source, destination, function (err) {
  if (err) {
    console.log('An error occured copying root statics');
    return console.error(err);
  }
  console.log('root static files copied to: ' + destination);
});
console.log('Operation ended');
