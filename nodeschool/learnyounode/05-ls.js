var fs = require('fs');
var path = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(path,function(err,flist){
	for(var i = 0,l=flist.length;i<l;i++){
		if(flist[i].indexOf(ext) > -1){
			console.log(flist[i]);
		}
	}
});