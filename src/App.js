import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Header from './Components/SharedPages/Navbar/Header';
import Purchase from './Components/Pages/Home/Parts/Purchase';
import Signup from './Components/Pages/Authentication/Signup';
import SignIn from './Components/Pages/Authentication/SignIn';
import Footer from './Components/SharedPages/Footer/Footer';
import RequireAuth from "./Components/SharedPages/RequireAuth/RequireAuth"
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <Home />}></Route>
        <Route path='/parts/:id' element={<RequireAuth>
          <Purchase />
        </RequireAuth>}></Route>
        <Route path='/signUp' element={<Signup />}></Route>
        <Route path='/login' element={<SignIn />}></Route>
        
      </Routes>
    <Footer/>
    
    </div>
  );
}

export default App;
