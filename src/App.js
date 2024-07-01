import logo from './logo.svg';
import './App.css';
import Create from './Component/Create';
import { Route, Routes } from 'react-router-dom';
import Read from './Component/Read';
import EditUpdate from './Component/EditUpdate';

function App() {
  return (
    <div className='container'>
   <Routes>
  <Route exact path='/' element={<Read/>}></Route>
  <Route exact path='/create' element={<Create/>}></Route>
  <Route exact path='/edit' element={<EditUpdate/>}></Route>
    
     </Routes>
    </div>
  );
}

export default App;
