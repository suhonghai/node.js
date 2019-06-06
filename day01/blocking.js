//阻塞 同步

var fs = require('fs')
try {
    var data = fs.readFileSync('index.txt')
    console.log(data.toString())
    console.log('程序执行完成')
} catch (error) {
    console.log(error)
}

//非阻塞 异步
var fs = require('fs')
fs.readFileSync('index.txt', function(err, data) {
    if (err) return console.log(err)
    console.log(data.toString())
})
console.log("程序执行完成")