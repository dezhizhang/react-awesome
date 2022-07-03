import {hashString} from '../utils';

function serializeStyle(args:any[]) {
    let styles = '';
    const strings = args[0];
    styles += strings[0];
    const name = hashString(styles);
    return {
        name,
        styles,
    }
}

export default serializeStyle;
