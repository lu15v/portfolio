import { useEffect } from 'react';
import Curtain from './components/Curtain';
import PageWrapper from './components/PageWrapper';
import { withRouter } from "react-router-dom";
import egg from './util/egg';

import './App.scss';

function App() {

  useEffect(() =>{
    console.log(egg)
  }, []);

  return (
    <div className="App">
      {sessionStorage.getItem("curtain") ? 
        <PageWrapper/>
       : <Curtain/>}
    </div>
  );
}

export default withRouter(App);