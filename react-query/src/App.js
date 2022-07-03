
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import axios from './utils/request';
function App() {
  const { data,isLoading } = useQuery('users',() => axios.get('/users'));
  if(isLoading) {
    return <div>loading</div>
  }

  return (
    <div className="App">
      <ul>
      {
        Array.isArray(data) && data.map((item => {
          return <li key={item.id}>{item.name}</li>
        }))
      }
      </ul>
      <ReactQueryDevtools/>
    </div>
  );
}

export default App;
