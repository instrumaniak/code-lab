var fs = require('fs');
var path = require('path');

module.exports = function (folder, ext, callback){

	ext = '.' + ext;
 
	fs.readdir(folder, function(err, files){
		if(err) return callback(err);
		
		var data = [];
		files.forEach(function(file){
			if(path.extname(file)===ext){
				data.push(file);
			}
		});
		callback(null,data);
	});


};
