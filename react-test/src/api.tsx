/*
 * :file description: 
 * :name: /react-test/src/api.tsx
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-08 04:42:16
 * :last editor: 张德志
 * :date last edited: 2022-08-08 04:50:10
 */


export const callback = (cb) => {
    setTimeout(() => {
        cb({code:200});
    },1000)
}

export const callPromise = () => {
    return new Promise((resolve) => {
        resolve({code:200})
    })
}