/* eslint-disable */
import logo from './logo.svg';
import GlobalStyle from './styles/globalStyle';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Login/Signup';
import Profile from './pages/Login/Profile';
import Creates1 from './pages/Album/Creates1';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="Creates1" element={<Creates1 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
