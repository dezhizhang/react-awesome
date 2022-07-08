import Form,{ Field } from "./rc-field-form";


function App() {

    const handleFinish = (value) => {
        console.log('value',value);
        
    }
    return <div>
        <Form
        initialValues={{username:'',password:''}}
        onFinish={handleFinish}
        >
        <Field name="username">
            <input placeholder="用户名"/>
        </Field>
        <Field name="password">
        <input placeholder="用户名"/>
        </Field>
        <button>提交</button>
        </Form>
    </div>
}

export default App;
