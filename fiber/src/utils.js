/*
 * :file description: 
 * :name: /fiber/src/utils.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-30 05:18:30
 * :last editor: 张德志
 * :date last edited: 2022-08-31 06:18:54
 */
export function setProps(dom,oldProps,newProps) {
    
    for(let key in newProps) {
        if(key !== 'children') {
            setProp(dom,key,newProps[key]);
        }
    }
}


function setProp(dom,key,value) {
    if(/^on/.test(key)) {
        dom[key.toLowerCase()] = value;
    }else if(key === 'style') {
        if(value) {
            for(let styleName in value) {
                dom.style[styleName] = value[styleName];
            }
        }
    }else {
        dom.setAttribute(key,value)
    }
}