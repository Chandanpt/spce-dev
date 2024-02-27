import { Button } from "@mui/material";
import React from "react";

interface StyledButtonProps {
  title: string;
  onClick: () => void;
}

const StyledButton = ({ title, onClick }: StyledButtonProps) => {
  return (
    <Button
      sx={{
        background: "#0497A7",
        borderRadius: "30px",
        color: "#FFFFFF",
        fontSize: "16px",
        padding: "8px 32px",
        "&.MuiButton-root:hover": {
          background: "#0497A7",
        },
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default StyledButton;
