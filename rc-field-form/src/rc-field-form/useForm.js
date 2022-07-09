import React from "react";
import Schema from './async-validator';

class FormStore{
    constructor() {
        this.store = {};
        this.callbacks = Object.create(null);
        this.fieldEntities = [];
    }
    registerField = (filedEntity) => {
        this.fieldEntities.push(filedEntity)
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
        this.validateFields()
        .then(values => {
            const { onFinish } = this.callbacks; 
            onFinish && onFinish(values);
        }).catch(errorInfo => {
            let { onFinishFailed } = this.callbacks;
            onFinishFailed && onFinishFailed(errorInfo);
        });
    }
    validateFields = () => {
        const values = this.getFieldValue();
        const descriptor = this.fieldEntities.reduce((descriptor,entity) => {
            const rules = entity.props.rules;
            if(rules && rules.length > 0) {
                const config = rules.reduce((memo,rule) => {
                    memo = {...memo,...rule};
                    return memo;
                },{});
                descriptor[entity.props.name] = config;
            }
            return descriptor
        },[]);
        return new Schema(descriptor).validate(values);
    }
    getForm = () => {
        return {
            submit:this.submit,
            setCallbacks:this.setCallbacks,
            registerField:this.registerField,
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