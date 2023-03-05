import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function DetalhesUsuarios(){

    const [usuario, setUsuario] = useState({})
    const {id} = useParams()

    useEffect(()=>{
    fetch(`https://reqres.in/api/users/${id}`)
    .then(resposta => resposta.json())
    .then(dados =>{
        setUsuario({
            id: dados.data.id,
            nome: dados.data.first_name,
            sobrenome: dados.data.last_name,
            email: dados.data.email,
            foto: dados.data.avatar
        })
    })
    },[id])

    if(usuario.nome !== undefined){
        return(
            <>
                <h1>{usuario.nome} {usuario.sobrenome}</h1>
                <p>{usuario.email}</p>
                <img src={usuario.foto}/><br/>
                <Link to='/'>
                    <Button variant="contained" sx={{textDecoration:"none"}}>Voltar</Button>
                </Link>
            </>
        )
    }

    return(
        <>
            <h1>
                Usuário Não Encontrado!
            </h1>
        </>
    )
}

export default DetalhesUsuarios;