import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Home from './views/Home/Home';
import About from './views/About/About';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/about' element={<About></About>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
