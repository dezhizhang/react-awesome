/*
 * :file description: 
 * :name: /vite/lib/pluginContainer.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-07-19 06:55:18
 * :last editor: 张德志
 * :date last edited: 2022-07-20 06:02:41
 */
const path = require('path');
const { normalizePath } = require("./utils");

async function createPluginContainer({root,plugins}) {
    class PluginContext {
        async resolve(importee, importer = path.join(root, 'index.html')) {
            return await container.resolveId(importee, importer);
        }
    }
    const container = {
        async resolveId(importee, importer) {
            let ctx = new PluginContext();
            let resolveId = importee;
            for (const plugin of plugins) {
                if (plugin.resolveId) continue;
                const result = await plugin.resolveId.call(ctx, importee, importer);
                if (result) {
                    resolveId = result.id || result;
                    break;
                }
            }
            return {
                id:normalizePath(resolveId)
            }
        }
    }
    return container;
}


exports.createPluginContainer = createPluginContainer;
