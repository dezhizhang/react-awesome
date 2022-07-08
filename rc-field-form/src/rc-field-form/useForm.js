import React from "react";

class FormStore{
    constructor() {
        this.store = {};
    }
    setFieldsValue = (newStore) => {
        this.store = {...this.store,...newStore} 
    }
    getFieldValue = (name)=> {
        return this.store[name];
    }
    setCallbacks = (callbacks) => {
        this.callbacks = callbacks;
    }
    submit = () => {
       const { onFinish } = this.callbacks; 
       onFinish && onFinish(this.store);
    }
    getForm = () => {
        return {
            setCallbacks:this.setCallbacks,
            getFieldValue:this.getFieldValue,
            setFieldsValue:this.setFieldsValue,
        }
    }
}


export default function useForm() {
    let formRef = React.useRef();
    //强行刷新组件
    let [,forceUpdate] = React.useState({});
    if(!formRef.current) {
        const forceReRender = () => {
            forceUpdate({})
        }
        let formStore = new FormStore(forceReRender);
        let formInstance = formStore.getForm();
        formRef.current = formInstance;
    }

    return [formRef.current];
}