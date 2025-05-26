
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './App.css';

import Home from './Pages/Home'
import About from './Pages/About';
import Contact from './Pages/Contact';
import {User} from './Pages/User';
import Dashboard from './Pages/Dashboard';
import DashboardHome from './Pages/DashboardHome';
import DashboardSettings from './Pages/DashboardSettings';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
         <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link> | 
        <Link to="/user/123">User 123</Link> | 
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
         {/* Basic Routing */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

         {/* Dynamic Routing */}
        <Route path="/user/:id" element={<User />} />

        {/* Nested Routing */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>

        {/* Redirect Example */}
        <Route path="/home" element={<Navigate to="/" />} />

        {/* Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
