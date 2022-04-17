import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import Blogs from "./Components/Blogs/Blogs";
import Banner from "./Components/Banner/Banner";
import Service from "./Components/Service/Service";
import ErrorNotFound from "./Components/Error404/ErrorNotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/banner" element={<Banner></Banner>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<ErrorNotFound></ErrorNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
