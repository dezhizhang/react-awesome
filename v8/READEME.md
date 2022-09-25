# v8引擎

### 解释热行
- 先将源代码通过解析器转成中间代码，再用解释器
### 多线程
```js
const readline = require('readline-sync');

(function mainThread() {
    while(true) {
        let num1 = readline.question('num1:');
        let num2 = readline.question('num2:');
        let result = parseFloat(num1) + parseFloat(num2);
        console.log(result);
        
    }
})()

```
### 任务队列
```js
const { messageQueue } = require('./messageQueue');

(function mainThread() {
    setInterval(() => {
        let task = messageQueue.get();
        task && task();
    },1000)
})();

(function ioThread() {
    let count = 1;
    setInterval(() => {
        messageQueue.put(() => {
            console.log('task' + count++)
        })
    },1000)
})()
```
### 
```js
const url = require('url');
const http = require('http');

process.on('message',(message) => {
    const { type,options } = message;
    if(type === 'send') {
        const urlObj = url.parse(options.url);
        const config = {
            hostname:urlObj.hostname,
            port:urlObj.port,
            path:urlObj.path,
            method:urlObj.method,
        }

        const req = http.request(config,(res) => {
            let chunks = [];
            res.on('data',(data) => {
                chunks.push(data);
            });
            res.on('end',() => {
                process.send({
                    type:'response',
                    data:JSON.parse(Buffer.concat(chunks).toString())
                })
            })
        });
        req.end();
        
    }
})
```