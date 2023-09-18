import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TaskList from './components/TaskList'
import FormAdd from './components/FormAdd';
import FormUpdate from './components/FormUpdate';
import {Routes, Route} from 'react-router-dom';
import HomeAbout from './components/HomeAbout';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element = {<HomeAbout/>}/>
        <Route path='/viewAllTasks' element = {<TaskList />}/>
        <Route path='/addNewTask' element = {<FormAdd/>}/>
        <Route path='/update/:id' element = {<FormUpdate />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
