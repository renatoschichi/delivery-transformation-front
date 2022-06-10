import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { Menu } from './components/Menu/Menu';

function App() {
  return (
      <SignIn></SignIn>
      //<Menu />
  );
}

export default App;
