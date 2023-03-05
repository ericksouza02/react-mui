import React, { Component } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom' 

import Usuario from './Usuario'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Detalhes from './Detalhes'
const Usuarios = props =>  {

  const [usuarios, setUsuarios] = useState([])

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

  useEffect(()=>{
    fetch('https://reqres.in/api/users')
    .then(resposta => resposta.json())
    .then(dados =>{
      const usuarios = dados.data.map(usuario=>({
        id: usuario.id,
        avatar: usuario.avatar,
        nome: usuario.first_name,
        sobrenome: usuario.last_name,
        email: usuario.email,
      }))
      setUsuarios(usuarios)
    })
  },[])

   return(
      <>  
      <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>      
          {usuarios.map(usuario => (

              <Grid xs={4} sx={{marginTop: '20px'}}>
              <Item sx={{margin:'10px', padding:0}}>  
                  <CardMedia
                      sx={{ height: 150, margin: 0, padding: 0}}
                      image={usuario.avatar}
                      title="green iguana"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      {usuario.nome} {usuario.sobrenome}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit alias temporibus recusandae, atque harum dolores molestiae ipsa omnis blanditiis voluptate.
                      </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/detalhes/${usuario.id}`}>
                      <Button size="small">Learn More</Button>
                    </Link>
                  </CardActions>
              </Item>
              </Grid>
              ))}
          </Grid>
          </Box>
      </Container>
      </>
    )
  }


export default Usuarios;