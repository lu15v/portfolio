import Curtain from './components/Curtain';
import MainPage from './components/MainPage';
import PageWrapper from './components/PageWrapper';

import './App.scss';

function App() {
  return (
    <div className="App">
      {sessionStorage.getItem("curtain") ? 
        <PageWrapper>
          <MainPage/>
        </PageWrapper>
       : <Curtain/>}
    </div>
  );
}

export default App;