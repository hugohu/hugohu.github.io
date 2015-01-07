var fs = require('fs'),
	fileList = [],
	path = ".",
	filename = "config.js";
//遍历目录生成目录名
function walk(path) {
	var dirList = fs.readdirSync(path);
	dirList.forEach(function(item) {
		if (fs.statSync(path + '/' + item).isDirectory()) {
			walk(path + '/' + item);
		} else if (item == "package.json") {
			fileList.push(path + '/' + item);
		}
	});
}
walk(path);
//生成配置文件.
function make(arr) {
	var alist = [];
	for (var i = 0; i < arr.length; i++) {
		var data = fs.readFileSync(arr[i], 'utf-8');
		alist.push(data);
	};
	return alist;
}
var data ='//make config by huugle '+ new Date() +'\nvar items=['+ make(fileList)+']';
fs.writeFile(path + "/" + filename, data, 'utf8', function(err) {
	if (err) {
		console.log('err');
	} else {
		console.log('the config is make ok.');
	}
});