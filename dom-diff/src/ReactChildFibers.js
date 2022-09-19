/*
 * :file description: 
 * :name: /dom-diff/src/ReactChildFibers.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-20 07:38:17
 * :last editor: 张德志
 * :date last edited: 2022-09-20 07:47:08
 */

import { REACT_ELEMENT_TYPE } from './ReactSymbols';



function childReconciler(shouldTrackSideEffects) {
    return function reconcileChildFibers(returnFiber,currentFirstChild,newChild) {
        const isObject = typeof newChild === 'object' && (newChild);
        if(isObject) {
            switch(newChild.$$typeof) {
                case REACT_ELEMENT_TYPE:
                    // return placeSingle;
                    default:
                        break;
            }
        }
    }
}


export const reconcileChildFibers = childReconciler(true);
