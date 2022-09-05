/*
 * :file description: 
 * :name: /react-event/src/SyntheticEvent.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-06 05:53:45
 * :last editor: 张德志
 * :date last edited: 2022-09-06 06:16:07
 */


function functionThatReturnsTrue() {
    return true;
}

function functionThatReturnsFalse() {
    return false;
}


export function createSyntheticEvent(Interface) {
    function SyntheticBaseEvent(reactName,reactEventType,targetInst,nativeEvent,nativeEventTarget) {
        this._reactName = reactName;
        this._targetInst = targetInst;
        this.type = reactEventType;
        this.target = nativeEventTarget;
        this.currentTarget = null;
        
        for(const propName in Interface) {
            this[propName] = nativeEvent[propName];
        }

        this.isDefaultPrevented = functionThatReturnsFalse;
        this.isPropagationPrevented = functionThatReturnsFalse;

    }

    Object.assign(SyntheticBaseEvent.prototype,{
        preventDefault() {
            this.isDefaultPrevented = true;
            const event = this.nativeEvent;
            if(event.preventDefault) {
                event.preventDefault();
            }else {
                event.returnValue = false;
            }
            this.isDefaultPrevented = functionThatReturnsTrue;
        },
        stopPropagation() {
            const event = this.nativeEvent;
            if(event.stopPropagation) {
                event.stopPropagation();
            }else {
                event.cancelBubble = true;
            }
            this.isPropagationPrevented = functionThatReturnsTrue;
        }
        
        
    })
    return SyntheticBaseEvent;
    
}


const MouseEventInterface = {
    clientX:0,
    clientY:0
}

export const SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface);
 

