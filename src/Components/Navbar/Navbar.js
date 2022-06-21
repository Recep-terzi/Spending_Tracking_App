import React from "react";
import styles from "./Navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { useLogout } from "../../hooks/useLogout";
import {useAuthContext} from "../../hooks/useAuthContext";
const Navbar = () => {
  const {logout} =useLogout();
  const {user} = useAuthContext();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link component="button" to="/" className={styles.link}>
                Harcama Takip App
              </Link>
            </Typography>
            {!user && <><Button variant="outlined" color="inherit" >
              <Link component="button" to="/login" className={styles.link}>
                Giriş
              </Link>
            </Button>
            <Button variant="" color="secondary">
              <Link component="button" to="/signup" className={styles.link}>
                Üye Ol
              </Link>
            </Button></>}
            {
              user && <>
              <Typography variant="caption">Merhaba {user.displayName}</Typography>
              <Button variant="contained" color="secondary" sx={{ml:5}} onClick={logout}>
              <Link component="button" to="/signup" className={styles.link}>
                Çıkış
              </Link>
            </Button></>
            }
            
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
