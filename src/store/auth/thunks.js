import { login, logout, verificandoCredentials } from "./authSlice";
import { entreConGoogle, loginConCorreoYContrasena, registarConCorreoYContrasena } from './../../firebase/providerAuth';



export const varificarAutenticacion = ( email, password, status ) => {

    return async (dispatch) => {

        dispatch(verificandoCredentials());

    }

}

export const loginGoogleOk = ( email, password, status ) => {

    return async (dispatch) => {

        dispatch(verificandoCredentials());
        
        console.log('loginGoogleOk');	
        const resultado = await entreConGoogle();

        if (resultado.ok) {
            dispatch(login(resultado));
        } else {
            dispatch( logout(resultado) );
        }

        console.log(resultado);

    }

}

export  const inicioCreacionCuenta = ( {email, password, nombre} ) => {
    
        return async (dispatch) => {
    
            dispatch(verificandoCredentials());
            //console.log('inicioCreacionCuenta');
            const { ok, uid, photoURL, errorMensaje , ecode  } = await registarConCorreoYContrasena( {email, password, nombre} );
            //const reslt = await registarConCorreoYContrasena( {email, password, nombre} );
            
            //console.log(reslt);

            if ( !ok )  return dispatch( logout({ errorMensaje, ecode }) );

            dispatch( login( { uid, photoURL, nombre, email }) );
    
         
    
        }
    
}

export const inicioSession = ( { email, password } ) => {
    
        return async (dispatch) => {
    
            dispatch(verificandoCredentials());
           
    	
            const { ok, uid, displayName, photoURL, errorMensaje } = await loginConCorreoYContrasena( { email, password } );
            //console.log(resultado);
    
            if ( !ok )  return dispatch( logout( {errorMensaje} ) );
            dispatch( login( { email, password, ok, uid, displayName, photoURL }) );
    
        }
    
}

// export const logoutOk = ( email, password, status ) => {
    
//         return async (dispatch) => {
    
//             dispatch(verificandoCredentials());
    
//             console.log('logoutOk');	
//             const resultado = await entreConGoogle();
    
//             if (resultado.ok) {
//                 dispatch(login(resultado));
//             } else {
//                 dispatch( logout(resultado) );
//             }
    
//             console.log(resultado);
    
//         }
    
//     }


