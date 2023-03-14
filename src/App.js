import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Challenge from './Challenge';
import ChallCreate from './ChallCreate';
import ChallDetails from './ChallDetails';
import ChallEdit from './ChallEdit';

function App() {
  return (
    <div className="App">
      <h1>welcome to react js</h1>
      
      <BrowserRouter>
  <Routes>
    <Route path='/' element={<Challenge/>}> </Route>
    <Route path='/challenge/create' element={<ChallCreate/>}/>
    <Route path='/challenge/edit' element={<ChallEdit/>}/>
    <Route path='/challenge/details' element={<ChallDetails/>}/>
  </Routes>

  </BrowserRouter>
    </div>
  );
  
}

export default App;
