import { Box, Grid } from "@mui/material";
import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
  selectEmailCheck: (val: string) => void;
}

const MainLayout = ({ children, selectEmailCheck }: Props) => {
  const [selectedEmailType, setSelectedEmailType] = useState<string>("");

  useEffect(() => {
    selectEmailCheck(selectedEmailType);
  }, [selectedEmailType]);

  return (
    <Box
      sx={{
        display: "flex",
        padding: "32px",
        gap: "24px",
      }}
    >
      <Sidebar onSelectEmailType={setSelectedEmailType} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          height: "50px",
          gap: "24px",
        }}
      >
        <Header />

        <Box sx={{ flex: 1 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
