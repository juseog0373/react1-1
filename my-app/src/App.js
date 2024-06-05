import logo from './logo.svg';
import './App.css';
import Welcome from './chapter05/Welcome';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import MainPage from './MainPage';
import LandingPage from './LandingPage';
import NumberList from './NumberList';
import AttendanceBook from './AttendanceBook';
import SignUp from './chapter11/SignUp';
import Calculator from './chapter12/Calculator';
import WelcomeDialog from './chapter13/WelcomeDialog';
import SplitPane from './chapter13/SplitPane';



function App() {
  return (
    <div className="App">
      <SplitPane left={<Cotacts/>} right={<Chat/>}/>
    </div>
  );
}

export default App;
