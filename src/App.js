import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Switch} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Resgistration from './Resgistration';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
       <ToastContainer></ToastContainer>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Resgistration></Resgistration>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
