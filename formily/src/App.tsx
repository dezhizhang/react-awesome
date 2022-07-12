import { createForm } from '@formily/core';
import 'antd/dist/antd.less'
import { createSchemaField, Field } from '@formily/react';
import { Form, FormItem, Input, NumberPicker } from '@formily/antd';
const form = createForm();


const SchemaField = createSchemaField({
  components:{
    FormItem:Input,
  }
})

const schema = {
  type:'object',
  properties:{
    name:{
      title:'姓名',
      type:'string',
      required:true,
      'x-decorator':'FormItem',
      'x-component':'Input'
    }
  }
}

function App() {
  return <Form labelCol={6} wrapperCol={6}>
    <SchemaField schema={schema}/>
  </Form>
}

export default App;


