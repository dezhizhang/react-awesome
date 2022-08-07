/*
 * :file description: 
 * :name: /react-test/__tests__/mock.test.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-08 05:01:19
 * :last editor: 张德志
 * :date last edited: 2022-08-08 05:17:21
 */
import axios from 'axios';
import { exec, getUser } from '../src/mock';


it("测试exec",() => {
    let callback = jest.fn();
    // callback.mockReturenValueOnce('abc');
    exec(callback);
    // exec(callback).toBeCalled();
    // exec(callback).toBeCalledTimes(2);
    console.log(callback.mock)

});


