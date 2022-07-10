import { useCallback, useReducer } from "react";
import cacheReducer from './cacheReducer';
import CacheContext from './CacheContext'
import * as cacheTypes from './typeing';

function KeepAliveProvider(props) {
    const [cacheStates, dispatch] = useReducer(cacheReducer, {});
    const mount = useCallback(({ cacheId, reactElement }) => {
        dispatch({ type: cacheTypes.CREATE, payload: { cacheId, reactElement } })
    }, []);

    return (
        <CacheContext.Provider value={{ cacheStates, dispatch, mount }}>
            {props.children}
            {
                Object.values(cacheStates).map(({ cacheId, reactElement }) => {
                    return <div id={`cache-${cacheId}`} key={cacheId} ref={(divDOM) => {
                        let cacheState = cacheStates[cacheId];
                        if (divDOM && (!cacheState.doms)) {
                            const doms = Array.from(divDOM.childNodes);
                            dispatch({ type: cacheTypes.CREATED, payload: { cacheId, doms } })
                        }
                    }}>{reactElement}</div>
                })
            }
        </CacheContext.Provider>
    )
}


export default KeepAliveProvider;
