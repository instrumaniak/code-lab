var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

//console.log(buf.toString());

var lines = buf.toString().split('\n')

console.log(lines.length - 1);