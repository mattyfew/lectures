var fs = require('fs')
var util = require('util')

var readdir = util.promisify(fs.readdir)

readdir(__dirname + '/files').then(function(files) {
    console.log("yo whatup", files)
}).catch(function(err) {
    console.log("There was an error in the readdir function thing", err)
});
