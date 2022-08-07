/*
 * :file description: 
 * :name: /react-test/__tests__/hooks.test.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-08 04:53:27
 * :last editor: 张德志
 * :date last edited: 2022-08-08 05:00:19
 */

let  counter = 0;

describe('counter测试代码',() => {
    beforeAll(() => {
        console.log('beforeAll');
        counter++;
    });
    beforeEach(() => {
        console.log('beforeAll');
        counter++;
    });
    afterEach(() => {
        console.log('beforeAll');
        counter++;
    });
    afterAll(() => {
        console.log(counter);
      
    });
    test('测试',() => {
        console.log('test');
        counter++;
    })
})