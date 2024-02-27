import React, { ChangeEvent, useState } from "react";
import {
  Box,
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
import LinkMailModal from "./LinkMailModal";
import axios from "axios";

interface Credentials {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
  [key: string]: string;
}

const Register = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const router = useRouter();

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

  const registerHandler = () => {
    console.log("These are the creds", {
      body: { credentials },
    });
    const url = "http://192.168.0.12:8000/authorize/";

    axios
      .post(url, {
        body: credentials,
      })
      .then((response) => {
        console.log(
          "Registration successful",
          response.data?.authorization_url
        );
        const authorizationUrl = response.data?.authorization_url;
        // window.open(authorizationUrl);

        const link = document.createElement("a");
        link.href = authorizationUrl;
        link.target = "_blank";
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Registration failed", error);
      });
  };

  return (
    <>
      <Grid container spacing={2} height="100vh">
        <Grid item xs={6} padding="0">
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
                Create an account
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
                  name={item}
                  type={index > 1 ? "password" : "text"}
                  label={
                    index === 3
                      ? "Confirm Password"
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
                />
              </FormControl>
            ))}
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
              <StyledButton onClick={() => registerHandler()} title="SIGN UP" />
              <Typography sx={{ color: "#0497A7", fontSize: "20px" }}>
                Already have an account?{" "}
                <span
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                  onClick={() => router.push("/login")}
                >
                  Log in
                </span>
              </Typography>
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
          <Box>
            <LoginBackground />
          </Box>
        </Grid>
      </Grid>
      <LinkMailModal />
    </>
  );
};

export default Register;
