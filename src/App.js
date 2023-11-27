import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import MainPage from "./components/MainPage"

function App() {
  useEffect(() => {
    document.body.style.zoom = "67%";
      }, []);
  return (
    <MainPage/>
  );
}

export default App;
