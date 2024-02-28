import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Mail from "./MailsList";
import MailDetails from "./MailDetails";
import Layout from "@/layout";
import MainLayout from "@/layout/MainLayout";

const MainPage = () => {
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedEmailType, setSelectedEmailType] = useState("");

  useEffect(() => {
    console.log("This is the selected type ===>>>", selectedEmailType);
  }, []);

  const forCheckingEmail = (val: string) => {
    console.log("This is the value === >>>", val);
    setSelectedEmailType(val);
  };

  return (
    <MainLayout selectEmailCheck={forCheckingEmail}>
      <Box sx={{ display: "flex", gap: "16px" }}>
        <Chip
          label="Action Required"
          variant="outlined"
          sx={{
            fontSize: "16px",
            color: "#333333",
            borderRadius: "15px",
            border: "1px solid #0497A7",
          }}
        />
        <Chip
          label="Pinned"
          variant="filled"
          sx={{
            fontSize: "16px",
            color: "#FFFFFF",
            borderRadius: "15px",
            border: "1px solid #0497A7",
            backgroundColor: "#0497A7",
          }}
        />
        <Chip
          label="Last Week"
          variant="outlined"
          sx={{
            fontSize: "16px",
            color: "#333333",
            borderRadius: "15px",
            border: "1px solid #0497A7",
          }}
        />
        <Chip
          label="Last Month"
          variant="outlined"
          sx={{
            fontSize: "16px",
            color: "#333333",
            borderRadius: "15px",
            border: "1px solid #0497A7",
          }}
        />
        <Chip
          label="Next Month"
          variant="outlined"
          sx={{
            fontSize: "16px",
            color: "#333333",
            borderRadius: "15px",
            border: "1px solid #0497A7",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", gap: "24px", marginTop: "24px" }}>
        <Accordion
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "none",
            width: "80%",
          }}
          defaultExpanded={true}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              borderRadius: "9px",
              borderLeft: "9px solid #0497A7",
              height: "50px",
              display: "flex",
              alignItems: "center",
              padding: "8px",
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 7px 11px #00000029",
            }}
          >
            {selectedEmailType}
          </AccordionSummary>
          <AccordionDetails
            sx={{ marginY: "30px", background: "none", padding: "0" }}
          >
            <Mail
              onSelectEmail={setSelectedEmail}
              selectedEmailType={selectedEmailType}
            />
          </AccordionDetails>
        </Accordion>
        {selectedEmail && (
          <Box sx={{ width: "100%" }}>
            <MailDetails selectedEmail={selectedEmail} />
          </Box>
        )}
      </Box>
    </MainLayout>
  );
};

export default MainPage;
