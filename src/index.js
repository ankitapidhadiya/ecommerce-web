import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/main.css';
import './style/header.css';
import './style/productlist.css';
import './style/home.css';
import './style/customhtml1.css';
import './style/listcategory.css';
import './style/promoblock.css';
import './style/specialproduct.css';
import './style/testimonial.css';
import './style/footer.css';
import './style/shop.css';
import './style/leftcolumn.css';
import './style/productdetails.css';
//import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'font-awesome/css/font-awesome.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
