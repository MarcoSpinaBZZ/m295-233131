var fs = require('fs')
var path = require('path')
 
var file = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(file, function callback(err, list) {
     if (err) return console.error(err)
     list.forEach(function (file) {
         if (path.extname(file) === ext) {
             console.log(file)
         }
     })
 })