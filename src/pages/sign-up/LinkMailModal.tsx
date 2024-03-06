import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, FormControl, TextField } from "@mui/material";
import StyledButton from "@/components/Button";
import axios from "axios";
import { Credentials } from ".";

export default function LinkMailModal({
  open,
  credentials,
  onClose, // Added onClose prop to handle modal closure
}: {
  open: boolean;
  credentials: Credentials;
  onClose: () => void;
}) {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClose = () => {
    setOpenModal(false);
    onClose(); 
  };

  const signupHandler = () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/authorize`;

    axios
      .post(url, {
        body: credentials,
      })
      .then((response) => {
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
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{
        "& .MuiDialog-paper": {
          width: "100%",
          borderRadius: "24px",
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}></DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "24px", fontWeight: "medium" }}>
            Link your Gmail
          </Typography>
        </Box>
        <FormControl defaultValue="" required sx={{ width: "100%" }}>
          <TextField
            type="text"
            placeholder="Enter Your Email"
            variant="standard"
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
            autoComplete="off"
          />
        </FormControl>
        <Typography sx={{ color: "#333333", fontWeight: "bold" }}>
          How many emails you want?
        </Typography>
        <FormControl defaultValue="" required sx={{ width: "100%" }}>
          <TextField
            type="text"
            placeholder="Enter Number"
            variant="standard"
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
            autoComplete="off"
          />
        </FormControl>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
        <StyledButton onClick={signupHandler} title="SUBMIT" />
      </DialogActions>
    </Dialog>
  );
}
