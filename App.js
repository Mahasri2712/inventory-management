import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import TeacherDashboard from './TeacherDashboard';
import StudentDashboard from './StudentDashboard';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [role, setRole] = useState('');

    const handleLogin = (role) => {
        setLoggedIn(true);
        setRole(role);
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setRole('');
    };

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            {loggedIn ? (
                                <button onClick={handleLogout}>Logout</button>
                            ) : (
                                <Link to="/login">Login</Link>
                            )}
                        </li>
                        <li>
                            {!loggedIn && <Link to="/register">Register</Link>}
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<h1>Welcome to Notes Share</h1>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    {loggedIn && role === 'teacher' && (
                        <Route path="/teacher" element={<TeacherDashboard />} />
                    )}
                    {loggedIn && role === 'student' && (
                        <Route path="/student" element={<StudentDashboard />} />
                    )}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
