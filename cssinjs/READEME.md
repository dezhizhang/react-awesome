# css-in-js
###
```js
function tag(strings,...values) {
    let output = '';
    let index;
    for(index = 0;index < values.length;index++) {
        output += strings[index] + values[index]
    }
    output += strings[index];
    return output;

}

let result = tag `a${1}b${2}c`;
console.log('res',result);

```