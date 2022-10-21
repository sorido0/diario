

import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './../pages/Login';
import { Registrar } from './../pages/Registrar';




export const AuthRoutes = () => {
  return (
    
    <Routes>
        <Route path="login" element={<Login />} />
        <Route path="registrar" element={<Registrar />} />
    
    
        <Route path="/*" element={ <Navigate to="/auth/login"/>} />
    </Routes>

  )
}
