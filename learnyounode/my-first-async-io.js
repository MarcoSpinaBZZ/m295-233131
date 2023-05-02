var fs = require('fs');

var file = process.argv[2];

fs.readFile(file, function callback(err, data) {
    if (err) {
        return console.log(err);
    }
    var lines = data.toString().split('\n').length - 1;
    console.log(lines);
}
);