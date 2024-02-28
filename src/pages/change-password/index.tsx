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

interface Credentials {
  newPassword: string;
  ConfirmPassword: string;
  [key: string]: string;
}

const Login = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    newPassword: "",
    ConfirmPassword: "",
  });

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

  return (
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
             New Password
            </Typography>
          </Box>
          {Object.keys(credentials).map((item) => (
            <FormControl
              key={item}
              defaultValue=""
              required
              sx={{ width: "100%" }}
            >
              <TextField
                id={item}
                name={item}
                label={item.charAt(0).toUpperCase() + item.slice(1)}
                type="password"
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
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          ></Box>
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
            <StyledButton onClick={() => {}} title="SIGN UP" />
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
  );
};

export default Login;
