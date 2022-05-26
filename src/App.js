
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AllParts from './Pages/AllParts/AllParts';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/parts' element={<AllParts/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/register' element={<Register></Register>}></Route>
     <Route path='/tools/:id' element={
          <RequireAuth>
           <Purchase/>
          </RequireAuth>
        }></Route>
     </Routes>
     <Footer/>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
