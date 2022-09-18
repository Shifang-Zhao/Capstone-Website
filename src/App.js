import home from './home.svg';
import people from './people.svg';
import login from './login.svg';
import intro from './intro.svg';
import robot from './robot.svg';
import './App.css';
import {BrowserRouter as Router, Route,Routes, Link} from "react-router-dom";
import Login from './Component/Login';
import Home from './Component/Home';

var myStyle = {
  backgroundColor: 'blue',
  height:'100vh'
}

function App() {
  return (
    <Router>
      <div style={myStyle}>
        <nav>
          <ul>
            <li>
            <div className='head'>
              <img src={robot} width="150" alt="robot"/>
              <h1 className='title'>Smart Delivery!</h1>
            </div>
              <div className='home'>
                <img src={home} width="30" alt="home"/>
                <Link className='link1' to="/home">Home</Link>
              </div>
              <div className='intro'>
                <img src={intro} width="30" alt="intro"/>
                <Link className='link2' to="/home">Introduction</Link>
              </div>
              <div className='contributor'>
                <img src={people} width="30" alt="home"/>
                <Link className='link3' to="/home">Contributors</Link>
              </div>
              <div className='login'>
                <img src={login} width="30" alt="home"/>
                <Link className='link4' to="/login">Login</Link>
              </div>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </div>
    </Router>
   
  )
}

export default App;
