import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";

import { useDispatch } from 'react-redux';
import { login } from "../../Services/authSlice";

const schema = yup.object({
  email: yup.string().required("Enter a valid email"),
  password: yup.string().required("Enter a valid password"),
});

//Login componenet
const Login = () => {
  const dispatch = useDispatch();
  // form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ email, password }) => {
    console.log(email, password);
    dispatch(login({email, password}));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            m: 1,
            bgcolor: "secondary.main",
            marginTop: "100px",
          }}
        ></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1, width: "100%" }}
        >
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            defaultValue={""}
            render={({ field }) => (
              <TextField
                id="email"
                label="Email Address"
                size="medium"
                autoFocus
                required
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            defaultValue={""}
            render={({ field }) => (
              <TextField
                id="password"
                label="Password"
                type="password"
                size="medium"
                margin="normal"
                required
                fullWidth
                error={!!errors.password}
                helperText={errors.password?.message}
                {...field}
              />
            )}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 5, height: "45px" }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
