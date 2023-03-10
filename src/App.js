//import logo from './logo.svg';
import './App.css';
//import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
//import Profile from './components/Profile';
import Counter from './components/Counter'
import Resume from './components/Resume';

function App() {

  return (
    <div className="App">
      <Profile name="Tariku" lastname="wegayhu"/>
      <Counter/>
      <Resume name="jibril"/>
    </div>
  );
}

export default App;
