import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
    <Login /> 
    <Register />
    <Home />
    </div>
  );
}

export default App;
