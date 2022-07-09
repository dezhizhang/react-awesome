import React from "react";
import FieldContext from "./FieldContext";

class Field extends React.Component {
    static contextType = FieldContext;
    getControlled = (childProps) => {
        const { name } = this.props;
        let { getFieldValue,setFieldValue} = this.context;
        return {
            ...childProps,
            value:getFieldValue(name),
            onChange:(ev) => {
                setFieldValue(name,ev.target.value)
            }
        }
    }
    render() {
        const children = this.props.children;
        return React.cloneElement(children,this.getControlled(children.props))
      
    }
}

export default Field;
