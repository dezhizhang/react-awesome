/*
 * :file description: 
 * :name: /react-test1/src/utils/index.tsx
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-08 05:55:09
 * :last editor: 张德志
 * :date last edited: 2022-08-08 05:59:02
 */
import React from "react"

function Loading() {
    return <div>loading</div>
}

export function dynamic(loadComponent) {
    const LazyComponent = React.lazy(loadComponent);
    return () => {
        <React.Suspense fallback={<Loading/>}>
            <LazyComponent/>
        </React.Suspense>
    }
}