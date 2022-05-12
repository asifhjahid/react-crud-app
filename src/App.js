
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Home from './components/Home';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div style={{maxWidth:'30rem', margin:'4rem auto'}}>
      <GlobalProvider>
      <Router>
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/add' element={<AddUser />} />
         <Route path='/edit/:id' element={<EditUser />} />
      
      </Routes>
      </Router>
      </GlobalProvider>
      
    
    </div>
  );
}

export default App;
