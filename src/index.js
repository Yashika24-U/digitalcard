import React from 'react';
import ReactDOM from 'react-dom/client';
import Photo from './Components.js/Photo';
import Name from './Components.js/Name';
import Button from './Components.js/Button';
import About from './About.js';
import Interest from './Interest';
import Footer from './Footer';
import './style.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Photo/>
    <Name/>
    <Button/>
    <About/>
    <Interest/>
    <Footer/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
