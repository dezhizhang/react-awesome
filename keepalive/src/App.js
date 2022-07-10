
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import User from './User';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/user" element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
