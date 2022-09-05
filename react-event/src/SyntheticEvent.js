/*
 * :file description: 
 * :name: /react-event/src/SyntheticEvent.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-06 05:53:45
 * :last editor: 张德志
 * :date last edited: 2022-09-06 05:59:15
 */


export function createSyntheticEvent(Interface) {
    function SyntheticBaseEvent(reactName,reactEventType,targetInst,nativeEvent,nativeEventTarget) {
        this._reactName = reactName;
        this._targetInst = targetInst;
        this.type = reactEventType;
        this.target = nativeEventTarget;
        this.currentTarget = null;
    }
    return SyntheticBaseEvent;
    
}