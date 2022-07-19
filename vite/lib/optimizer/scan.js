/*
 * :file description: 
 * :name: /vite/lib/optimizer/scan.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-07-19 06:11:01
 * :last editor: 张德志
 * :date last edited: 2022-07-20 06:47:13
 */
const path = require('path');
const { build } = require('esbuild');
const esBuildScanPlugin = require('./esBuildScanPlugin');
async function scanImports(config) {
    const depImports = {};

    const esPlugin = await esBuildScanPlugin(config, depImports);

    await build({
        absWorkingDir: config.root,
        entryPoints: [path.resolve('./index.html')],
        bundle: true,
        format: 'esm',
        outdir: 'build/index.js',
        write: true,
        plugins: [esPlugin]
    });
    return depImports;
}


module.exports = scanImports;
