import './styles/global.scss';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from './pages/SignIn';
import HomePage from './pages/Home';
import { initializeApp } from 'firebase/app';
import { config } from './libs/firebase';
import AuthRoute from './components/AuthRoute/AuthRoute';
import { Checkout } from './pages/Checkout';
import { Menu } from './pages/Menu';
import Product from './pages/Product';

initializeApp(config.firebaseConfig);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<AuthRoute><HomePage /></AuthRoute>} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/carrinho" element={<Menu />} />
        <Route path="/produto" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
