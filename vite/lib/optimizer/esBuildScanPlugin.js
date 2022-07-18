/*
 * :file description: 
 * :name: /vite/lib/optimizer/esBuildScanPlugin.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-07-19 06:18:22
 * :last editor: 张德志
 * :date last edited: 2022-07-19 06:52:33
 */
const fs = require('fs-extra');
const path = require('path');

const htmlTypeReg = /\.html$/;

async function esBuildScanPlugin(config,depImports) {
    const resolve = async(id,importer) {
        
    }
 return {
    name:'vite:dep-scan',
    steup(build) {
      build.onResolve({filter:htmlTypeReg},async({path,importer}) => {
        const resolveId = await resolve(path,importer);
        if(resolveId) {
            return {
                path:resolveId.id || resolveId,
                namespace:'html'
            }
        }
      });

    // 读取文件
      build.onLoad({filter:/s/,namespace:'html'},async({path}) => {

      })
    }
 }
}

module.exports = esBuildScanPlugin;
