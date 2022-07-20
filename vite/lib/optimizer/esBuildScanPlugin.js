/*
 * :file description: 
 * :name: /vite/lib/optimizer/esBuildScanPlugin.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-07-19 06:18:22
 * :last editor: 张德志
 * :date last edited: 2022-07-21 06:16:52
 */
const fs = require('fs-extra');
const path = require('path');
const { createPluginContainer } = require('../pluginContainer');
const resolvePlugin = require('../plugins/resolve');
const { normalizePath } = require('../utils');

const htmlTypeReg = /\.html$/;
const scriptModuleReg = /<script type="module" src="(.+?)"><\/script>/;
const jsTypesReg = /\.js$/
async function esBuildScanPlugin(config,depImports) {
  config.plugins = [resolvePlugin(config)];
  
  const container = await createPluginContainer(config);
  console.log(container);
  
  const resolve = async(importee,importer)=> {
    debugger
    return await container.resolveId(importee,importer);
  }
 return {
    name:'vite:dep-scan',
    setup(build) {
      build.onResolve({filter:htmlTypeReg},async({path,importer}) => {
        console.log('resolveId ',path,'importer',importer)
        const resolveId = await resolve(path,importer);
       
        if(resolveId) {
            return {
                path:resolveId.id || resolveId,
                namespace:'html'
            }
        }
      });

    build.onResolve({filter:/.*/},async({path,importer}) => {
        const resolveId = await resolve(path,importer);
        if(resolveId) {
          const id = resolveId.id || resolveId;
          const included = id.includes('node_modules');
          if(included) {
            depImports[path] = normalizePath(id);
            return {
              path:id,
              external:true,
            }
          }
          return {path:id}
        }
      });

    // 读取文件
      build.onLoad({filter:htmlTypeReg},async({id}) => {
        console.log('-------',id);
        // const html = fs.readFileSync(id,'utf-8');
        // const [,scriptSrc] = html.match(scriptModuleReg);
        // const js = `import ${JSON.stringify(scriptSrc)}`;
        // return {
        //   contents:js,
        //   loader:'js'
        // }
      });
      build.onLoad({filter:jsTypesReg},async({pathDir}) => {
        let ext = path.extname(pathDir).slice(1);
        let contents = fs.readFileSync(pathDir,'utf-8');
        return {
          contents,
          loader:ext
        }
      })
    }
 }
}

module.exports = esBuildScanPlugin;
