import { Box, Grid } from "@mui/material";
import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "32px",
        gap: "24px",
      }}
    >
      <Sidebar />

      <Box sx={{ display: "flex", flexDirection: "column", flex: 1, height: "50px", gap: "24px" }}>
        <Header />

        <Box sx={{ flex: 1 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
