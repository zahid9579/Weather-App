// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Weather from './components/Weather/Weather';
// import Register from './components/Form/Register';
// import Login from './components/Form/Login';

// const App = () => {
//   return (
//     <Router>
//       <Navbar /> 
//       <Weather /> 
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Weather from './components/Weather/Weather';
import Register from './components/Form/Register';
import Login from './components/Form/Login';

const App = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};

// A separate component to manage conditional rendering
const MainContent = () => {
  const location = useLocation();
  const hideWeather = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      <Navbar />
      {!hideWeather && <Weather />} 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
