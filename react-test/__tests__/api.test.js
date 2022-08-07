/*
 * :file description: 
 * :name: /react-test/__tests__/api.test.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-08 04:43:32
 * :last editor: 张德志
 * :date last edited: 2022-08-08 04:51:37
 */
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
