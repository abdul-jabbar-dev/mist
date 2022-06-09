import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import News from './Pages/News';
import AboutUs from './Pages/AboutUs';
import AdminInfo from './Pages/AdminInfo';
import Departments from './Pages/Departments';
import ContactWithUs from './Pages/ContactWithUs';
import './App.css';
/* student Dashboard nested route files */
import StudentsDashboard from './Pages/Auth/StudentsDashboard';
import StuInvoiceList from './Components/Students/StuInvoiceList';
import StuClassRouting from './Components/Students/StuClassRouting';
import StuOnlineClass from './Components/Students/StuOnlineClass';
import StuOnlinePayment from './Components/Students/StuOnlinePayment';
import StuCertificates from './Components/Students/StuCertificates';
import StuClassShedule from './Components/Students/StuClassShedule';
import StuAttendanceReport from './Components/Students/StuAttendanceReport';


function App() {
  return (
    <div className='bg-gray-100'>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactwithus" element={<ContactWithUs />} />
          <Route path="/admininfo" element={<AdminInfo />} />
          <Route path="/studentdash" element={<StudentsDashboard />} >

            {/* student Dashboard nested routes */}
            <Route path="invoice" element={<StuInvoiceList />} />
            <Route path="classrouting" element={<StuClassRouting />} />
            <Route path="classshedule" element={<StuClassShedule />} />
            <Route path="attendancereport" element={<StuAttendanceReport />} />
            <Route path="onlineclass" element={<StuOnlineClass />} />
            <Route path="certificates" element={<StuCertificates />} />
            <Route path="studenPayment" element={<StuOnlinePayment />} />

          </Route>
          <Route path="/departments" element={<Departments />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
