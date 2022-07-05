import { FixedSizeList } from 'react-window'
import './style.css';


function Row({ index, style }) {
    return <div style={style} className={index % 2 ? 'odd' : 'even'}>row{index}</div>
}

function App() {
    return <FixedSizeList className='list' height={200} width={200} itemSize={50} itemCount={100}>
        {Row}
    </FixedSizeList>
}

export default App;
