import React from "react";
import FieldContext from "./FieldContext";
import useForm from "./useForm";

const Form = ({initialValues,onFinish,children}) => {
    const [formInstance] = useForm();
    const handleSubmit = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        formInstance.submit();
    }

    formInstance.setCallbacks({onFinish});

    return (
        <form onSubmit={handleSubmit}>
            <FieldContext.Provider>
                {children}
            </FieldContext.Provider>
        </form>
    )
}

export default Form;
