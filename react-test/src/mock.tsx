/*
 * :file description: 
 * :name: /react-test/src/mock.tsx
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-08 05:02:09
 * :last editor: 张德志
 * :date last edited: 2022-08-08 05:11:24
 */

import axios from 'axios';

export function exec(callback) {
    callback('133');
    callback('456');
}

export function getUser() {
    return axios.get('/api/users')
}