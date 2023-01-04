import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/header';
import DashBoard from './pages/Dashboard/dashboard';
import Error from './pages/Error/error404';
import { SideBar } from './components/SideBar/SideBar';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<DashBoard/>}></Route>
          <Route path="/404" element={<Error/>}/>
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
