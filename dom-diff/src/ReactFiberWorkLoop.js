/*
 * :file description: 
 * :name: /dom-diff/src/ReactFiberWorkLoop.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-18 11:18:00
 * :last editor: 张德志
 * :date last edited: 2022-09-18 11:25:35
 */


export function scheduleUpdateOnFiber(fiber) {
    const fiberRoot = markUpdateLaneFromFiberToRoot(fiber);
    performSyncWorkOnRoot(fiberRoot);
}


function performSyncWorkOnRoot(fiberRoot) {
    console.log('fiberRoot',fiberRoot)
}

function markUpdateLaneFromFiberToRoot(sourceFiber) {
    let node = sourceFiber;
    let parent = node.return;
    while(parent) {
        node = parent;
        parent = parent.parent;
    }

    return node.stateNode;
}