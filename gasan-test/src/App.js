import './App.css';
import NAvbar from './navbar';
import Home from './home';

function App() {
  return (
    <div className="App">
      <NAvbar/>
      <div className="content">
      <Home/>
      </div>
    </div>
  );
}

export default App;
