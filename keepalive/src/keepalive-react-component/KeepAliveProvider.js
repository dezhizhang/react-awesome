import { useReducer } from "react";
import cacheReducer from './cacheReducer';
import CacheContext from './CacheContext'

function KeepAliveProvider(props) {
    const [cacheStates, dispatch] = useReducer(cacheReducer, {});
    return (
        <CacheContext.Provider value={{ cacheStates, dispatch }}>
            {props.children}
        </CacheContext.Provider>
    )
}


export default KeepAliveProvider;
