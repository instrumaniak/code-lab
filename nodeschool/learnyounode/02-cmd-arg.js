// sum the command line inputs

var sum = 0;
for(var i = 2, l = process.argv.length;i<l;i++){
	sum += Number(process.argv[i]);
}

console.log(sum);