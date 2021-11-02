import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import {BrowserRouter as Router} from 'react-router-dom';
import {ApolloClient, InMemoryCache, createHttpLink, ApolloProvider} from '@apollo/client';

import './index.scss';
import App from './App';

const history = createBrowserHistory();

const httpLink = createHttpLink({
  uri: 'https://portfolio-graphql-be.herokuapp.com/'
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
      <Router history={history}>
        <ApolloProvider client={apolloClient}>
          <App />
        </ApolloProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);