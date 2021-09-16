import Presentation from './components/Presentation';
import MainPage from './components/MainPage';

import './App.scss';

function App() {
  return (
    <div className="App">
      {sessionStorage.getItem("presentation") ? <MainPage/> : <Presentation/>}
    </div>
  );
}

export default App;