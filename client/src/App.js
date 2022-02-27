import Landing from './pages/Landing/Landing.jsx';
import Login from './pages/Login/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Profile from './pages/Profile/Profile.jsx';

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
