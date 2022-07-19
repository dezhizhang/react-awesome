/*
 * :file description: 
 * :name: /vite/lib/optimizer/esBuildScanPlugin.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-07-19 06:18:22
 * :last editor: 张德志
 * :date last edited: 2022-07-20 07:03:26
 */
const fs = require('fs-extra');
const path = require('path');
const { createPluginContainer } = require('../pluginContainer');
const resolvePlugin = require('../plugins/resolve');

const htmlTypeReg = /\.html$/;
const scriptModuleReg = /<script type="module" src="(.+?)"><\/script>/
async function esBuildScanPlugin(config,depImports) {
  config.plugins = [resolvePlugin(config)];
  
  const container = await createPluginContainer(config);
  
  const resolve = async(importee,importer)=> {
    return await container.resolveId(importee,importer);
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
      build.onLoad({filter:htmlTypeReg,namespace:'html'},async({path}) => {
        const html = fs.readFileSync(path,'utf-8');
        const [,scriptSrc] = html.match(scriptModuleReg);
        const js = `import ${JSON.stringify(scriptSrc)}`;
        return {
          contents:js,
          loader:'js'
        }
      })
    }
 }
}

module.exports = esBuildScanPlugin;
