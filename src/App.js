import './App.css';
import './profile/Profile'
import Profile from './profile/Profile';
import Table from './Table.js';
import Account from './Account.js';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
    
      <Routes>
      <Route path="/*" element={<Profile/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/table" element={<Table/>}></Route>
      <Route path="/account" element={<Account/>}></Route>
      </Routes>
    
    
    </>
  );
}

export default App;
