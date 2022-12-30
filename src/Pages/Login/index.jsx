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

const schema = yup.object({
  userName: yup.string().required("Enter a valid username"),
  password: yup.string().required("Enter a valid password"),
});

//Login componenet
function Login() {
  // form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ userName, password }) => {
    console.log(userName, password);
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
            name="userName"
            control={control}
            rules={{ required: true }}
            defaultValue={""}
            render={({ field }) => (
              <TextField
                id="userName"
                label="Email Address"
                size="medium"
                autoFocus
                required
                fullWidth
                error={!!errors.userName}
                helperText={errors.userName?.message}
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
