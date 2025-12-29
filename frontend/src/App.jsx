import { Button } from "@/components/ui/button";
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login/Login.jsx'
import Register from './Pages/Register/Register.jsx'
import ProtectedRoute from "./Pages/ProtectedRoute/ProtectedRoute.jsx";
import Home from "./Pages/Home/Home.jsx";
export default function App() {
  return (

  <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='home'
      element={<ProtectedRoute>
        <Home/>
      </ProtectedRoute>}
      />
    </Routes>
    </BrowserRouter>
  </>
  );
}
