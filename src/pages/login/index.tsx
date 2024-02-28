import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LoginBackground from "@/components/LoginBackground";
import { Label } from "@mui/icons-material";
import StyledButton from "@/components/Button";
import Image from "next/image";
import google from "../../assets/google.svg";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { login } from "@/redux/features/auth-slice";

interface Credentials {
  email: string;
  password: string;
  [key: string]: string;
}

const Login = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>()

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const property = event.target.name;

    if (property in credentials) {
      const { value } = event.target;
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [property]: value,
      }));
    }
  };

  const loginHandler = () => {
    const url = "http://192.168.0.12:8000/login/";

    axios
      .post(url, {
        body: credentials,
      })
      .then((response) => {
        const accessToken = response.data?.access_token;
        sessionStorage.setItem("access_token", accessToken);
        dispatch(login(credentials.email));
        router.push("/");
      })
      .catch((error) => {
        console.error("Registration failed", error);
        router.push("login")
      });
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={6}>
          <Box
            sx={{
              paddingX: "160px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "32px",
                  color: "#333333",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Log In
              </Typography>
            </Box>
            {Object.keys(credentials).map((item, index) => (
              <FormControl
                key={item}
                defaultValue=""
                required
                sx={{ width: "100%" }}
              >
                <TextField
                  id={item}
                  type={index > 0 ? "password" : "text"}
                  name={item}
                  label={
                    index === 0
                      ? "Email/Mobile No."
                      : item.charAt(0).toUpperCase() + item.slice(1)
                  }
                  variant="standard"
                  value={credentials[item]}
                  onChange={handleInputChange}
                  sx={{
                    fontSize: "28px",
                    color: "red",
                    width: "100%",
                    marginY: "8px",
                    "& .MuiInput-root": {
                      width: "100%",
                      "&:before": {
                        borderBottom: "2px solid #0497A7",
                      },
                      "&:active": {
                        borderBottom: "2px solid #0497A7",
                      },
                      "&:hover:not(.Mui-disabled):before": {
                        borderBottom: "2px solid #0497A7",
                      },
                    },
                  }}
                  autoComplete="off"
                />
              </FormControl>
            ))}

            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Typography sx={{ fontSize: "16px", color: "#707070" }}>
                Forgot Password ?
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginY: "16px",
                gap: "20px",
              }}
            >
              <StyledButton title="LOG IN" onClick={() => loginHandler()} />
              <Typography sx={{ color: "#0497A7", fontSize: "20px" }}>
                Don&apos;t have an account?{" "}
                <span
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                  onClick={() => router.push("/register")}
                >
                  Sign Up
                </span>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <Divider sx={{ flexGrow: 1 }} />
                <Typography
                  variant="body2"
                  sx={{ marginX: "10px", color: "text.secondary" }}
                >
                  OR
                </Typography>
                <Divider sx={{ flexGrow: 1 }} />
              </Box>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  boxShadow: "0px 5px 9px #0000001C",
                  padding: "8px 16px",
                  borderRadius: "30px",
                }}
              >
                <Image src={google} alt="Google" width={40} height={40} />
                <Typography
                  sx={{
                    color: "#0497A7",
                    fontSize: "20px",
                    textTransform: "none",
                  }}
                >
                  Continue with Google
                </Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            "&.MuiGrid-item": {
              paddingLeft: "0",
              paddingTop: "0",
            },
          }}
        >
          <Box sx={{ height: "100%" }}>
            <LoginBackground />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
