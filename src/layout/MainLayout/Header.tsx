import { Box, Divider, IconButton, InputBase } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import human from "../../assets/Human.png"

const Header = () => {
  return (
    <Box
      sx={{
        width: "auto",
        backgroundColor: "white",
        height: "max-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        flex: "1",
        borderRadius: "15px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#F4F4F4",
          borderRadius: "5px",
        }}
      >
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase sx={{ flex: 1 }} placeholder="Search" />
      </Box>
      <Box sx={{display: "flex", alignItems: "center", gap: "20px"}}>
        <NotificationsNoneIcon />
        <Image src={human} alt="Human" height="50" width="50" />
      </Box>
    </Box>
  );
};

export default Header;
