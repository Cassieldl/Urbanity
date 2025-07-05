import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './css/index.css'
import './css/tailwind.css'
import './css/tailwind-build.css'
import Home from './Pages/landing/Home.jsx';
import SignUp from './Pages/signUp/SignUp.jsx';
import SignIn from './Pages/signIn/SignIn.jsx';
import Dashboard from './Pages/dashboard/Dashboard.jsx';
import Checkout from './Pages/Checkout/Checkout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/landing" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </BrowserRouter>
);
