import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { VHFControl } from './pages/VHFControl/VHFControl';


function App() {

  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col flex-auto flex-shrink antialiased bg-panel'>
        <Navbar/>
        <Sidebar/>
        <div className='ml-[330px]'>
        <Routes>
          <Route exact path="/" element={<Navigate to="/VHF-Control"/>} />
          <Route exact path="/VHF-Control" element={<VHFControl/>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
