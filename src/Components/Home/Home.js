import React from 'react'
import './Home.module.css'
import {Container,Grid} from '@mui/material'
import Form from '../Form/Form'
import Liste from '../List/Liste'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

const Home = () => {
  const {user} = useAuthContext()
  const {belge,error} = useCollection('harcamalar',["uid","==",user.uid],["olusturulmaTarihi","desc"])

  return (
    <Container sx={{mt:8 }}>
      <Grid container spacing={10}>
        <Grid item md={8} sm={12} xs={12}>
          {
            error && <p>{error}</p>
          }
          {
            belge && <Liste harcamalar={belge}></Liste>
          }
        </Grid>
        <Grid item md={4} sm={12} xs = {12}>
          <Form uid={user.uid}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home