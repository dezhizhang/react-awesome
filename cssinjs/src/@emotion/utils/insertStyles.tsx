
function insertStyle(serialized:any) {
    const className = `css-` + serialized.name;
    const rule = `.${className}{${serialized.style}}`;
    const style = document.createElement('style');
    style.setAttribute('data-emotion','css');
    style.appendChild(document.createTextNode(rule));
    document.head.appendChild(style);
    
}

export default insertStyle;
