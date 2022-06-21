import React, { useState } from "react";
import "./Signup.module.css";
import {
  Container,
  Typography,
  Button,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useSignup } from "../../hooks/useSignup";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { error, wait, signup } = useSignup();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
    username: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(values.email, values.password, values.username);
    navigate("/");
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const navigate = useNavigate();
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography
          sx={{ mt: 15, ml: 5, fontWeight: "bold" }}
          variant="h4"
          color="darkslateblue"
        >
          Üye Ol
        </Typography>
        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="user-name"> Username </InputLabel>
          <OutlinedInput
            value={values.username}
            onChange={handleChange("username")}
            id="username"
            label="username"
          ></OutlinedInput>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="email"> Email </InputLabel>
          <OutlinedInput
            value={values.email}
            onChange={handleChange("email")}
            id="email"
            label="Email"
          ></OutlinedInput>
        </FormControl>
        <FormControl fullWidth sx={{ my: 5 }}>
          <InputLabel htmlFor="password"> Password </InputLabel>
          <OutlinedInput
            value={values.password}
            onChange={handleChange("password")}
            id="password"
            label="Password"
            type={values.showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle Password"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          ></OutlinedInput>
        </FormControl>
        {!wait && (
          <Button
            variant="outlined"
            type="submit"
            color="info"
            size="large"
            sx={{ mt: 5 }}
          >
            Üye Ol
          </Button>
        )}
        {wait && (
          <Button
            variant="outlined"
            disabled
            type="submit"
            color="info"
            size="large"
            sx={{ mt: 5 }}
          >
            Üye olunuyor...
          </Button>
        )}
        {error && <p>{error}</p>}
      </form>
    </Container>
  );
};

export default Signup;
