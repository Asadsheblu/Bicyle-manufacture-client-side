import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Header from './Components/SharedPages/Navbar/Header';
import Purchase from './Components/Pages/Home/Parts/Purchase';
import Signup from './Components/Pages/Authentication/Signup';
import SignIn from './Components/Pages/Authentication/SignIn';
import Footer from './Components/SharedPages/Footer/Footer';
import RequireAuth from "./Components/SharedPages/RequireAuth/RequireAuth"
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Myorder from './Components/Pages/Dashboard/User/Myorder';
import Addreview from './Components/Pages/Dashboard/User/Addreview';
import Myprofile from './Components/Pages/Dashboard/User/Myprofile';
import Alluser from './Components/Pages/Dashboard/Admin/Alluser';
import AddProduct from './Components/Pages/Dashboard/Admin/AddProduct';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <Home />}></Route>
        <Route path='/parts/:id' element={<RequireAuth>
          <Purchase />
        </RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
        <Dashboard/>
      </RequireAuth>}>
        <Route index element={<Myorder />}></Route>
        <Route path='/dashboard/review' element={<Addreview />}></Route>
        <Route path='/dashboard/profile' element={<Myprofile />}></Route>
        <Route path='/dashboard/user' element={<Alluser />}></Route>
        <Route path='/dashboard/addProduct' element={<AddProduct />}></Route>
        
        
      </Route>
        <Route path='/signUp' element={<Signup />}></Route>
        <Route path='/login' element={<SignIn />}></Route>
        
      </Routes>
    <Footer/>
    
    </div>
  );
}

export default App;
