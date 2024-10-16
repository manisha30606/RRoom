import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Router/Home';
import ServiceData from './Router/serviceData';
import Login from './Router/login';
import Sign from './Router/Sign';
import Book from './Router/Book';
import RoomData from './Router/roomData';
import ScrollUp from './Component/ScrollUp'; // Import ScrollToTop

function App() {
  return (
    <Router>
      <ScrollUp /> {/* Scroll to top on route change */}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicedata/:serviceType" element={<ServiceData />} />
        <Route path="/servicedata/:serviceType/roomdata/:RoomType" element={<RoomData />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
  );
}

export default App;
