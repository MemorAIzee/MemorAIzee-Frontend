/* eslint-disable */
import logo from './logo.svg';
import GlobalStyle from './styles/globalStyle';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
