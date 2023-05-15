import React from 'react';
import "./App.css"

import Routes from './pages/Routes/route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
   <>
    <Routes />
    <ToastContainer />
   </>
  );
}

export default App;
