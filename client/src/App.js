import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/Signup/Signup';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
