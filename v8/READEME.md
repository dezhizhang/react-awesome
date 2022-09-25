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