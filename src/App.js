import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import DashBoard from './component/DashBoard/DashBoard';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Register from './component/Register/Register';
import BlogsList from './component/BlogsList/BlogsList';
import Blog from './component/Blog/Blog';
import BlogCard from './component/BlogCard/BlogCard';

function App() {
  return (
   <BrowserRouter>
   {<Header/>}
   <Routes>
    {/* <Route path="/" element={<Header/>} /> */}
    <Route path="/Login" element={<Login/>} />
    <Route path="/" element={<DashBoard/>} />
    <Route path='/Register' element={<Register/>} />
    <Route path='/BlogsList' element={<BlogsList/>}/>
    <Route path='/Blog' element={<Blog/>}/>
    <Route path='/BlogCard' element={<BlogCard/>}/>
  
   </Routes>
   </BrowserRouter>
  )

}

export default App;
