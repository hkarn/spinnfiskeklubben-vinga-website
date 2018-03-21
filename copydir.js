// include fs-extra package
var fs = require("fs-extra");
 
var source = __dirname + '/.next/static/'
var destination =  __dirname + '/out/_next/static/'
 
// copy source folder to destination
fs.copy(source, destination, function (err) {
    if (err){
        console.log('An error occured copying .next static')
        return console.error(err)
    }
    console.log('.next static files copied to: ' + __dirname + '/out/_next/static/')
});
/*
var source = __dirname + '/static/'
var destination =  __dirname + '/out/_next/static/'
 
// copy source folder to destination
fs.copy(source, destination, function (err) {
    if (err){
        console.log('An error occured copying custom static')
        return console.error(err)
    }
    console.log('Custom static files copied to: ' + __dirname + '/out/_next/static/')
});

*/