import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import HomeScreen from './screens/homeScreen';

function App() {
  
  return (
    <BrowserRouter>
       <HomeScreen></HomeScreen>
    </BrowserRouter>
  );
}

export default App;
