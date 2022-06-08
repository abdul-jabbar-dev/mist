import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/AboutUs';
import AdminInfo from './Pages/AdminInfo';
import StudentsDashboard from './Pages/Auth/StudentsDashboard';
import ContactWithUs from './Pages/ContactWithUs';
import Departments from './Pages/Departments';
import Home from './Pages/Home';
import News from './Pages/News';

function App() {
  return (
    <div className='bg-gray-100'>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactwithus" element={<ContactWithUs />} />
          <Route path="/admininfo" element={<AdminInfo />} />
          <Route path="/studentdash" element={<StudentsDashboard />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
