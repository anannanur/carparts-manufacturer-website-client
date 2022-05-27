
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
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard';
import Welcome from './Pages/Dashboard/Welcome';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';
import ManageParts from './Pages/Dashboard/Admin/ManageParts';
import AllUser from './Pages/Dashboard/Admin/AllUser';
import ManageOrder from './Pages/Dashboard/Admin/ManageOrder';
import AddParts from './Pages/Dashboard/Admin/AddParts';
import UpdatePart from './Pages/Dashboard/Admin/UpdatePart';
import Payment from './Pages/Dashboard/Payment';
import RequireAdmin from './Pages/RequireAuth/RequireAdmin';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/parts' element={<AllParts />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/contact-us' element={<Contact></Contact>}></Route>
        <Route path='/parts/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }>
        </Route>

        <Route path="dashboard" element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>} >
          <Route index element={<Welcome />}></Route>
          <Route path='/dashboard/myorder' element={<MyOrder />}></Route>
          <Route path="add-review" element={<AddReview></AddReview>}></Route>
          <Route path="manageParts" element={
           <RequireAdmin>
              <ManageParts></ManageParts>
           </RequireAdmin>
          }></Route>
          <Route path="user" element={
            <RequireAdmin>
              <AllUser></AllUser>
            </RequireAdmin>
          }></Route>
          <Route path="manageOrder" element={
            <RequireAdmin>
              <ManageOrder></ManageOrder>
            </RequireAdmin>
          }></Route>
          <Route path="add" element={
           <RequireAdmin>
              <AddParts></AddParts>
           </RequireAdmin>
          }></Route>
          <Route path="parts/:id" element={
            <RequireAdmin>
              <UpdatePart></UpdatePart>
            </RequireAdmin>
          }></Route>
          <Route path="my-profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="my-profile/edit-profile" element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
