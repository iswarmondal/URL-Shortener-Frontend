import './App.css';
import Home from './pages/Home';
import { Routes, Route, Link } from "react-router-dom";
import Register from './pages/Register';
import NavBar from './components/NavBar';
import UserDashboard from './pages/UserDashboard';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<UserDashboard />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
