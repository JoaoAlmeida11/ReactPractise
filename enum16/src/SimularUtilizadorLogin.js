import React from 'react';
export default function SimularUtilizadorLogin(props){
    let setLogin = props.setLogin;
    return (
        <button onClick={()=>setLogin(true)}>Iniciar Sessão</button>
    )
}