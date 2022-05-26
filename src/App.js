
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllParts from './Pages/AllParts/AllParts';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/parts' element={<AllParts/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
