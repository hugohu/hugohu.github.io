var fs = require('fs'),
	fileList = '',
	path = "./",
	filename = "config.js";
//遍历目录生成目录名
function walk(path) {
	var dirList = fs.readdirSync(path);
	dirList.forEach(function(item) {
		if (fs.statSync(path + '/' + item).isDirectory()) {
			fileList += '"' + item + '",';
		}
	});
}
walk(path);
//生成配置文件.

var data = "var items=[" + fileList.substring(0,fileList.length-1) + "];";
fs.writeFile(path + "/" + filename, data, 'utf8', function(err) {
	if (err) {
		console.log('err');
	} else {
		console.log('is ok');
	}
})