import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Book from './chapter03/Book';
import Library from './chapter03/Library';
// import Welcome from './chapter05/Welcome';
import Counter from './chapter07/UserCounter'
import Comment from './chapter05/Comment';
import CommentList from './chapter05/CommentList';
import FocusButton from './chapter07/FocusButton';
import Clock from './chapter04/Clock';
import Accommodate from './chapter07/Accommodate';

const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(() => {
root.render(
  <React.StrictMode>
    {/* <Library/> */}
    {/* <Home hakbun="202030207" name="김준석" /> */}
    {/* <CommentList/> */}
    {/* <FocusButton/> */}
    {/* <Clock /> */}
    {/* <Welcome name="리액트"/> */}
    <Accommodate/>
  </React.StrictMode>
);
// }, 1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
