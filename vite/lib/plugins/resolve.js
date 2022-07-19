/*
 * :file description: 
 * :name: /vite/lib/plugins/resolve.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-07-20 06:09:13
 * :last editor: 张德志
 * :date last edited: 2022-07-20 07:02:56
 */

const fs = require('fs-extra');
const path = require('path');
const resolve = require('resolve');

function resolvePlugin() {
    return {
        name: 'vite:resolve',
        resolveId(importee, importer) {
            if (importee.startsWith('/')) {
                return {id:path.resolve(config.root,id.slice(1))}
            }

            //如果硬盘上的
            if(path.isAbsolute(importee)) {
                return {id:importee}
            }

            if(importee.startsWith('.')) {
                const baseDir = path.dirname(importee);
                const fsPath = path.resolve(baseDir,importee)
                return {id:fsPath}
            }

            let res = tryNodeResolve(importee,importer,config);
            if(res) {
                return res;
            }
        }

    }
}

function tryNodeResolve(importee,importer,config) {
    const pkgPath = resolve.sync(`${importee}/package.json`,{basedir:config.root});
    const pkgDir = path.dirname(pkgPath);
    const pkg = JSON.parse(fs.readFileSync(pkgPath,'utf-8'));
    const entryPoint = pkg.module;
    const entryPointPath = path.join(pkgDir,entryPoint);
    return {id:entryPointPath};
    
}

module.exports = resolvePlugin;