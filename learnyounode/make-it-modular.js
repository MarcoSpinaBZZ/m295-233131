var mymodule = require('./mymodule.js');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function(err, list) {
    if (err) {
        return console.log(err);
    }
    list.forEach(function(file) {
        console.log(file);
    });
}
);