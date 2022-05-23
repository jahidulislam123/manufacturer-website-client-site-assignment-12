
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';

function App() {
  return (
    <div className="App">
       <Navbar></Navbar> 
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
     </Routes> 
    
     <Footer></Footer>
    </div>
  );
}

export default App;
