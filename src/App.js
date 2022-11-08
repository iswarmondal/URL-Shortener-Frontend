import './App.css';
import Home from './pages/Home';
import { Routes, Route, Link } from "react-router-dom";
import Register from './pages/Register';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/register" element={<Register />} />
    </Routes>
    </>
  );
}

export default App;
