import React from "react";
import FieldContext from "./FieldContext";
import useForm from "./useForm";

const Form = ({initialValues,onFinish,onFinishFailed,children}) => {
    const [formInstance] = useForm();
    const handleSubmit = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        formInstance.submit();
    }

    formInstance.setCallbacks({onFinish,onFinishFailed});
    const mountRef = React.useRef(null);
    formInstance.setInitialValues(initialValues,mountRef.current);
    if(!mountRef.current) {
        mountRef.current = true;

    }
    return (
        <form onSubmit={handleSubmit}>
            <FieldContext.Provider value={formInstance}>
                {children}
            </FieldContext.Provider>
        </form>
    )
}

export default Form;
