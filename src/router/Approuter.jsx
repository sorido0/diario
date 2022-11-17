

import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Route, Router, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { DiaroRoutes } from '../Diario/router/DiaroRoutes';
import { VerificarLogin } from '../ui/components/VerificarLogin';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { DiarioAuth } from '../firebase/config';
import { login, logout } from '../store/auth';



export const Approuter = () => {

  const { status } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {

       onAuthStateChanged( DiarioAuth, async( user ) => {
         console.log( user );
         if( !user) return dispatch( logout() );
         
          const { displayName, email, uid, photoURL } = user;
          dispatch( login( { displayName, email, uid, photoURL }) )
          //dispatch( login( user ))

       })
    
  }, [])
  

  if (status === "checking") {
    return <VerificarLogin />
  }


  return (
    
    <Routes>
        <Route path="/auth/*" element={<AuthRoutes />}/>


        <Route path="/*" element={<DiaroRoutes />} />
    </Routes>
  )
}
