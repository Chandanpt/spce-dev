import React from "react";
import { Box, Typography } from "@mui/material";
import loginBackground from "../assets/Login-Background.png";
import Image, { StaticImageData } from "next/image";
import logo from "../assets/white-logo.svg";

const LoginBackground = () => {
  const backgroundImageUrl = (loginBackground as StaticImageData).src;
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingX: "130px",
          width: "100%",
          gap: "40px",
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image src={logo} alt="Logo" width={225} height={225} />
      </Box>
    </Box>
  );
};

export default LoginBackground;
