import logo from './logo.svg';
import './App.css';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import { BrowserRouter, Route,Routes,Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
