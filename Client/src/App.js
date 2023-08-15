import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import DashboardPage from './Components/DashboardPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // useHistory
} from "react-router-dom"
import { PasswordForgetPage } from './Components/PasswordForgetPage';

function App() {

  // ***** RENDER ******

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/dashboard' element={<DashboardPage />} />
          <Route exact path='/forgetPassword' element={<PasswordForgetPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
