/* eslint-disable */
import logo from './logo.svg';
import GlobalStyle from './styles/globalStyle';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Login/Signup';
import Profile from './pages/Login/Profile';
import Creates1 from './pages/Album/Creates1';
import Creates2 from './pages/Album/Creates2';
import Creates3 from './pages/Album/Creates3';
import Creates4 from './pages/Album/Creates4';
import Viewreview from './pages/Review/Viewreview';
import Writereview from './pages/Review/Writereview';
import Home from './pages/Home/Home';
import Mypage from './pages/Mypage/Mypage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="Creates1" element={<Creates1 />} />
          <Route path="Creates2" element={<Creates2 />} />
          <Route path="Creates3" element={<Creates3 />} />
          <Route path="Creates4" element={<Creates4 />} />
          <Route path="Viewreview" element={<Viewreview />} />
          <Route path="Writereview" element={<Writereview />} />
          <Route path="/Mypage" element={<Mypage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
