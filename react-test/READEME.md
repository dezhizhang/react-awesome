### 测试callback和promise

```js
import { callback, callPromise } from '../src/api';

describe('异步测试',() => {
    it('测试callback',(done) => {
        callback(res => {
            expect(res).toEqual({code:200})
            done()
        })
    });

    it("测试promise",async() => {
        const result = await callPromise();
        expect(result).toEqual({code:200})
    })
})

```
