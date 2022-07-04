
import { useRequest } from 'ahooks';
import './App.css'

function getName() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('jllo')
    },1000)
  })
}

function App() {

  const { data,loading } = useRequest(getName);
  if(loading) {
    return <div>加载中....</div>
  }
  return (
    <div >
     用户名:{data}
    </div>
  )
}

export default App
