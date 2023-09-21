import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Exchange from './components/Exchange';
import AppRouter from './components/AppRouter';
import { useState } from 'react';

function App() {
  return (
    <div className='App'>
      <AppRouter/>
    </div>
  );
}

export default App;
