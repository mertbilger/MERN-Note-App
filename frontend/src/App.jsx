import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import GlobalStyles from "./StyledComponents/GlobalStyle";
import { Pages } from "./StyledComponents/AppStyled";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { kullanici } = useAuthContext();
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Pages>
          <Routes>
            <Route path="/" element={kullanici ? <Home /> : <Navigate to="/login" />} />
            <Route path="/login" element={!kullanici ? <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!kullanici ? <Signup /> : <Navigate to="/" />} />
          </Routes>
        </Pages>
      </BrowserRouter>
    </div>
  );
}

export default App;
