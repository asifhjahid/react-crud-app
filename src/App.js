
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Home from './components/Home';

function App() {
  return (
    <div style={{maxWidth:'30rem', margin:'4rem auto'}}>
      <Router>
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/add' element={<AddUser />} />
         <Route path='/edit/:id' element={<EditUser />} />
      
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
