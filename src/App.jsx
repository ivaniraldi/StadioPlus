import './App.css'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
    <Routes>
      <Route path="/" element={ <Home/>} />
    </Routes>
    </div>
  )}

export default App
