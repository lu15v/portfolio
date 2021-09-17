import Curtain from './components/Curtain';
import PageWrapper from './components/PageWrapper';

import './App.scss';

function App() {
  return (
    <div className="App">
      {sessionStorage.getItem("curtain") ? 
        <PageWrapper/>
       : <Curtain/>}
    </div>
  );
}

export default App;