import Curtain from './components/Curtain';
import MainPage from './components/MainPage';

import './App.scss';

function App() {
  return (
    <div className="App">
      {sessionStorage.getItem("curtain") ? <MainPage/> : <Curtain/>}
    </div>
  );
}

export default App;