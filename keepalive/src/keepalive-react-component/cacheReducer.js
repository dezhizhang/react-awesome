
import * as cacheTypes from './typeing';

function cacheReducer(cacheStates, action) {
    let payload = action.payload;
    switch (action.type) {
        case cacheTypes.CREATE:
            return {
                ...cacheStates,
                [payload.cacheId]: {
                    status: cacheTypes.CREATE,
                    chcheId: payload.cacheId,
                    cacheState:undefined,
                    reactElement: payload.reactElement,

                }
            }
        default:
            return cacheStates;


    }
}

export default cacheReducer;
