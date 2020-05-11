import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import reducers from './redux/reducers'
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

const ADD_AUTHOR = "ADD_AUTHOR"
const ADD_QUOTES = "ADD_QUOTES"


const addQuotes = (author, quotes) => {
  return {
    type: ADD_QUOTES,
    author,
    quotes
  }
}

const addAuthor = (author) => {
  return {
    type: ADD_AUTHOR,
    author
  }
}

const mapStateToProps = (state) => {
  return {quotes: state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addQuotes: (author, quotes) => {
      dispatch(addQuotes(author, quotes))
    },
    addAuthor: (author) => {
      dispatch(addAuthor(author))
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Container />
    </Provider>   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
