


import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { DiaroRoutes } from '../Diario/router/DiaroRoutes';
import { VerificarLogin } from '../ui/components/VerificarLogin';

import { useCheckAuth } from './../hooks/useCheckAuth';



export const Approuter = () => {

  const status  = useCheckAuth();

  if (status === "checking") {
    return <VerificarLogin />
  }

  //console.log(status)

  return (
    
    <Routes>

      
        {
          (status === "si-login") 
          ? <Route path="/*" element={<DiaroRoutes />} /> 
          : <Route path="/auth/*" element={<AuthRoutes />}/>
        }


         <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    
    </Routes>
  )
}
