import { Button } from "@mui/material";
import React from "react";

interface EditButtonProps {
  title: string;
  onClick: () => void;
}

const EditButton = ({ title, onClick }: EditButtonProps) => {
  return (
    <Button
      sx={{
        background: "#FFFFFF",
        border: "1px solid #707070",
        borderRadius: "24px",
        color: "#0497A7",
        fontSize: "16px",
        padding: "4px 8px",
        "&.MuiButton-root:hover": {
          background: "#0497A7",
          color: "#FFFFFF"
        },
        textTransform: "none",

      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default EditButton;
