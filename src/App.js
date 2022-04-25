import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Home from './views/Home/Home';
import About from './views/About/About';
import Profile from './views/Profile/Profile';
import ProtectedRoute from './guards/ProtectedRoute';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>

      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/about' element={<About></About>}></Route>

      <Route path='/' element={<ProtectedRoute></ProtectedRoute>} >
        <Route path='/profile' element={<Profile></Profile>}></Route>
      </Route>
      
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
