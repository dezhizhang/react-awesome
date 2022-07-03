

function hashString(keys:string) {
    let val:number = 100000;
    for(let i=0;i < keys.length;i++) {
        val += keys.charCodeAt(i);
    }
    return val.toString(16).slice(0,7);
}

export default hashString;
