var mod = require('./mod.js');
var folder = process.argv[2]
var ext = process.argv[3]


mod(folder, ext, function(err,data){
	if(err) return console.error(err);

	data.forEach(function(file){
		console.log(file);
	});
});