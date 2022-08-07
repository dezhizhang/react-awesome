/*
 * :file description: 
 * :name: /react-test/babel.config.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-07 21:59:39
 * :last editor: 张德志
 * :date last edited: 2022-08-07 22:02:37
 */

module.exports = {
    presets: [
        [
            '@babel/preset-env', 
            {
                targets: {node: 'current'}
            }
        ],
        "@babel/preset-react",
        "@babel/preset-typescript"
    ],
}
