import React, { useState } from "react";
import "./Login.module.css";
import {
  Container,
  Typography,
  Button,
  FormControl,
  FilledInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const {login,error,wait} = useLogin();
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(values.email,values.password);
    navigate('/')
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const navigate = useNavigate()
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography
          sx={{ mt: 15, ml: 5, fontWeight: "bold" }}
          variant="h4"
          color="darkslateblue"
        >
          Login
        </Typography>
        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="email"> Email </InputLabel>
          <FilledInput
            value={values.email}
            onChange={handleChange("email")}
            id="email"
            label="Email"
          ></FilledInput>
        </FormControl>
        <FormControl fullWidth sx={{ my: 5 }}>
          <InputLabel htmlFor="password"> Password </InputLabel>
          <FilledInput
            value={values.password}
            onChange={handleChange("password")}
            id="password"
            label="Password"
            type={values.showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="Toggle Password" onClick={handleClickShowPassword} edge="end">
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          ></FilledInput>
        </FormControl>
        {
          !wait && <Button
          variant="outlined"
          type="submit"
          color="info"
          size="large"
          sx={{ mt: 5 }}
        >
          GİRİŞ
        </Button>
        }
        {
          wait && <Button
          variant="outlined"
          disabled
          type="submit"
          color="info"
          size="large"
          sx={{ mt: 5 }}
        >
          Giriş Yapılıyor
        </Button>
        }
        {
          error && <p>{error}</p>
        }
      </form>
    </Container>
  );
};

export default Login;
