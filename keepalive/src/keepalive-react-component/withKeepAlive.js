import { useContext, useEffect, useRef } from "react"

import CacheContext from "./CacheContext";

function withKeepAlive(OldComponent,{cacheId = window.location.pathname}) {
    return function(props) {
        const divRef = useRef(null);
        const { cacheStates,mount } = useContext(CacheContext);

        useEffect(() => {
            const cacheState = cacheStates[cacheId];
            if(cacheStates && cacheState.doms) {
                const doms =  cacheState.doms;
                doms.forEach(dom => divRef.appendChild(dom))
            }else {
                mount({cacheId,reactElement:<OldComponent {...props}/>})
            }
        },[cacheStates, mount, props])

        return <div ref={divRef}></div>
    }
}

export default withKeepAlive 