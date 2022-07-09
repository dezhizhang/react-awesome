import React from "react";

class FormStore{
    constructor() {
        this.store = {};
    }
    setFieldsValue = (newStore) => {
        this.store = {...this.store,...newStore} 
    }
    setFieldValue = (name,value) => {
        return this.store[name] = value;
    }
    getFieldValue = (name)=> {
        return this.store[name];
    }
    setInitialValues = (initialValues,mounted) => {
        if(!mounted) {
            this.store = {...initialValues}
        }
        
    }
    getFieldsValue = () => {
        return this.store;
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
            submit:this.submit,
           
            setCallbacks:this.setCallbacks,
            setFieldValue:this.setFieldValue,
            getFieldValue:this.getFieldValue,
            setFieldsValue:this.setFieldsValue,
            setInitialValues:this.setInitialValues,
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