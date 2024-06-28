import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './signup.jsx';
import Login from './loginn.jsx';
import NotFound from './page.jsx';
import Aboutme2 from './about.jsx';
import Aboutme from './abbout.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<NotFound/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/aboutme" element={<Aboutme/>} />
        <Route path="/aboutme2" element={<Aboutme2/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
