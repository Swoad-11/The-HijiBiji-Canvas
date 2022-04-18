import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import Blogs from "./Components/Blogs/Blogs";
import Banner from "./Components/Banner/Banner";
import Service from "./Components/Service/Service";
import ErrorNotFound from "./Components/Error404/ErrorNotFound";
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login/Login';
import Signup from './Components/Login/Signup/Signup';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/banner" element={<Banner></Banner>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/servicedetail' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path="*" element={<ErrorNotFound></ErrorNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
