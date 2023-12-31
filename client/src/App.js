import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home"
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import Registration from './pages/Registration';
import Login from './pages/login';


function App() {
  return (<div className="App">
    <Router>
      <div className='navbar'>
        <Link to="/" >Home</Link>
        <Link to="/createpost" >Create a post</Link>
        <Link to="/login">Log in</Link>
        <Link to="/registration">Register</Link>
        
      </div>  
      
      <Routes> 
        <Route path="/" exact element={<Home/>} />
        <Route path="/createpost" exact element={<CreatePost/>} />
        <Route path="/post/:id" exact element={<Post/>} />
        <Route path="/registration" exact element={<Registration/>} />
        <Route path="/login" exact element={<Login/>} />
        
        
      </Routes>
    </Router>
  </div>);
}

export default App;
