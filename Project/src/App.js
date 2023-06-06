import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import UserProfile from './UserProfile';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
