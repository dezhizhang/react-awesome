/*
 * :file description: 
 * :name: /esbuild/index.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-07-18 05:15:32
 * :last editor: 张德志
 * :date last edited: 2022-07-18 05:26:20
 */

const esbuild = require('esbuild');


const envPlugin = {
    name:'env',
    setup(build) {
        build.onResolve({filter:/^env$/},args => {
            return {
                path:args.path,
                namespace:'env-ns'
            }
        });
        build.onLoad({ filter: /.*/, namespace: 'env-ns' }, () => ({
            contents: JSON.stringify(process.env),
            loader: 'json',
        }))
    }
}

esbuild.build({
    entryPoints:['main.js'],
    bundle:true,
    plugins:[envPlugin],
    outfile:'out.js'
})