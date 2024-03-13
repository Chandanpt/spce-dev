import { Box, Grid } from "@mui/material";
import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Loader from "@/components/Loader";

interface Props {
  children: ReactNode;
  selectEmailCheck: (cat: string) => void;
}

const MainLayout = ({ children, selectEmailCheck }: Props) => {
  const [selectedEmailType, setSelectedEmailType] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    selectEmailCheck(selectedEmailType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedEmailType]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
            <Header setIsLoading={setIsLoading} />

            <Box sx={{ flex: 1 }}>{children}</Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default MainLayout;
