import React from 'react'
import {List,ListItem,ListItemText,Divider,IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useFirestore } from '../../hooks/useFirestore'

const Liste = ({harcamalar}) => {
  const {belgeSil} = useFirestore('harcamalar')
  return (
    <List>
      {harcamalar.map((harcama) => (
        <React.Fragment key={harcama.id}>
          <ListItem secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => belgeSil(harcama.id)}>
              <DeleteIcon></DeleteIcon>
            </IconButton>
          }>
            <ListItemText primary={harcama.title} secondary={harcama.piece}></ListItemText>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  )
}

export default Liste