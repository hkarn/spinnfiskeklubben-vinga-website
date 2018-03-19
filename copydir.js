// include fs-extra package
var fs = require("fs-extra");
 
var source = __dirname + '/.next/static/'
var destination =  __dirname + '/out/_next/static/'
 
// copy source folder to destination
fs.copy(source, destination, function (err) {
    if (err){
        console.log('An error occured copying static')
        return console.error(err)
    }
    console.log('Static files copied to: ' + __dirname + '/out/_next/static/')
});