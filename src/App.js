import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './component/AddTask';
import Navbar from './component/Navbar';
import TaskList from './component/TaskList';
import TodoDetails from './component/TodoDetails';

function App() {

   

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={
          <>
              <Navbar/>
              <AddTask/> 
              <hr />
              <TaskList/>
          </>}/> 
          <Route path='/details' element={<><Navbar/><TodoDetails/></>}/>
        </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default App;
