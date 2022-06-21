import React,{useState,useEffect} from 'react'
import {Button,TextField,Typography} from '@mui/material'
import { useFirestore } from '../../hooks/useFirestore'

const Form = ({uid}) => {
    const [title,setTitle] = useState('')
    const [piece,setPiece] = useState('')
    const {belgeEkle,response} = useFirestore('harcamalar')
    const handleSubmit = (e) => {
        e.preventDefault()
        belgeEkle({title,piece,uid})
    }
    useEffect(() => {
      if(response.basari){
        setTitle('')
        setPiece('')
      }
    },[response.basari])
  return (
    <form onSubmit={handleSubmit} noValidate autoComplete='off'>
        <Typography variant='h6' color='darkslateblue' >Harcama Bilgisini Giriniz : </Typography>
        <TextField label='Harcama Başlık' variant='standard' fullWidth required onChange={(e)=> setTitle(e.target.value)} value={title}></TextField>
        <Typography variant='h6' color='darkslateblue'  sx={{mt:5}}>Harcama Miktarını Giriniz : </Typography>
        <TextField label='Harcama Başlık' variant='standard' fullWidth required onChange={(e)=> setPiece(e.target.value)} value={piece}></TextField>
        <Button variant='contained' color="secondary" type='submit' sx={{mt:5}}> Ekle </Button>
    </form>
  )
}

export default Form;