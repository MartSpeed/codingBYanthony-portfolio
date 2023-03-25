import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Header from "./components/Header/Header.component.js"
import Container from "./components/AboutUs/AboutUs.component"
import Navbar from './components/Navigation/nav.component';
import Footer from './components/Footer/Footer.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Navbar />
    <Container />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
