import React from "react";
import './Usuario.css'
const Usuario = props => {
    
    return(
        <ul>
            <li><img src={props.usuario.avatar} alt="" /></li>
            
            <li>{props.usuario.nome} {props.usuario.sobrenome}</li>
            
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat unde minus ullam nulla quidem facilis labore nihil consectetur porro. Modi ad at impedit mollitia architecto aspernatur amet vero voluptas suscipit.</li>
        </ul>
    )
}

export default Usuario;