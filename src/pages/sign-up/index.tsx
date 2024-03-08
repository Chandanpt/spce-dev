import React, { useEffect, useState } from "react";
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
import StyledButton from "@/components/Button";
import { useRouter } from "next/router";
import axios from "axios";

export interface Credentials {
  username: string;
  email: string;
  // emailQuantity: number;
  password: string;
  confirmpassword: string;
  [key: string]: string | number;
}

const Signup = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    email: "",
    // emailQuantity: 0,
    password: "",
    confirmpassword: "",
  });
  const [isExisting, setIsExisting] = useState<boolean>(false);

  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  const router = useRouter();

  const setDefaultValues = () => {
    const suggestedEmail = router.query.email as string;
    const suggestedPassword = router.query.password as string;

    setCredentials({
      username: "",
      email: suggestedEmail || "",
      password: suggestedPassword || "",
      confirmpassword: suggestedPassword || "",
    });
  };

  const isPasswordValid = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const property = event.target.name;
    const { value } = event.target;

    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [property]: value,
    }));

    if (property === "password" || property === "confirmpassword") {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        confirmpassword: "",
      }));
    }
  };

  const signupHandler = () => {
    const errors: Record<string, string> = {};
    setIsExisting(false);

    Object.keys(credentials).forEach((property) => {
      const value = credentials[property].toString().trim();
      if (value === "") {
        errors[property] = "Please fill the empty field!";
      }
    });

    if (!isPasswordValid(credentials.password)) {
      errors.password =
        "Password should be minimum 8 characters with atleast 1 lowercase, uppercase, number and special character!";
    }

    if (credentials.password !== credentials.confirmpassword) {
      errors.confirmpassword = "Password does not match";
    }

    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/authorize`;

      axios
        .post(url, {
          body: credentials,
        })
        .then((response) => {
          if (response?.data?.Message !== "User Already Exist") {
            const authorizationUrl = response.data?.authorization_url;

            const link = document.createElement("a");
            link.href = authorizationUrl;
            link.target = "_blank";
            link.click();
            document.body.removeChild(link);
          } else {
            setIsExisting(true);
          }
        })
        .catch((error) => {
          console.error("Registration failed", error);
        });
    }
  };

  useEffect(() => {
    setDefaultValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.email, router.query.password]);

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
                error={!!validationErrors[item]}
              >
                <TextField
                  id={item}
                  name={item}
                  type={index > 1 ? "password" : index === 1 ? "email" : "text"}
                  label={
                    // index === 4
                    //   ? "Confirm Password"
                    //   : index === 2
                    //   ? "Number of emails"
                    //   : item.charAt(0).toUpperCase() + item.slice(1)
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
                <FormHelperText
                  sx={{
                    margin: "0px",
                    marginBottom: validationErrors[item] ? "8px" : "0px",
                  }}
                >
                  {validationErrors[item]}
                </FormHelperText>
              </FormControl>
            ))}
            {isExisting && (
              <Box>
                <Typography sx={{ color: "red", fontSize: "14px" }}>
                  User Already Exists!
                </Typography>
              </Box>
            )}
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
              <StyledButton onClick={() => signupHandler()} title="SIGN UP" />
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
    </>
  );
};

export default Signup;
