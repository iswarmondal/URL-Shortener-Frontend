import './App.css';
import Home from './pages/Home';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
