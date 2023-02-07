import Login from './pages/Login';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import MyAdvertisements from './pages/MyAdvertisements';
import NewTour from './pages/NewTour';
import Payment from './pages/Payment';
import AdminDashboard from './pages/AdminDashboard';

function App() {

  return (
    <>
    <div className="App">

  
    </div>

    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/MyAdvertisements" element={<MyAdvertisements />} />
          <Route path="/NewTour" element={<NewTour />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
      </Routes>

    </>
  );
}

export default App;
