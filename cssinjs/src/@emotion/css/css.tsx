
import { serializeStyle } from '../serialize';
import {insertStyle} from '../utils';

function css(...args:any) {
    const serialized = serializeStyle(args);
    insertStyle(serialized)
    return `css-` + serialized.name
}

export default css;
