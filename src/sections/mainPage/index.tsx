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
import MailDetails, { SelectedEmail } from "./MailDetails";
import MainLayout from "@/layout/MainLayout";

const MainPage = () => {
  const [selectedEmail, setSelectedEmail] = useState<SelectedEmail | null>(
    null
  );
  const [selectedEmailType, setSelectedEmailType] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const filters = ["Pinned", "Last Week", "Last Month"];

  const forCheckingEmail = (cat: string) => {
    setSelectedEmailType(cat);
  };

  const handleChipClick = (item: string) => {
    setSelectedFilter(item);
  };

  useEffect(() => {
    forCheckingEmail(selectedEmailType);
  }, [selectedEmailType]);

  return (
    <MainLayout selectEmailCheck={forCheckingEmail}>
      <Box sx={{ display: "flex", gap: "16px" }}>
        {/* <Chip
          label="Action Required"
          variant="outlined"
          sx={{
            fontSize: "16px",
            color: "#333333",
            borderRadius: "15px",
            border: "1px solid #0497A7",
          }}
        /> */}
        {filters.map((item, index) => (
          <Chip
            key={index}
            label={item}
            variant={item === selectedFilter ? "filled" : "outlined"}
            sx={{
              fontSize: "16px",
              color: item === selectedFilter ? "#FFFFFF" : "#333333",
              borderRadius: "15px",
              border: "1px solid #0497A7",
              backgroundColor:
                item === selectedFilter ? "#0497A7" : "1px solid #0497A7",
              "&:hover": {
                backgroundColor:
                  item === selectedFilter ? "#0497A7" : "1px solid #0497A7",
              },
            }}
            onClick={() => handleChipClick(item)}
          />
        ))}
        {/* <Chip
          label="Next Month"
          variant="outlined"
          sx={{
            fontSize: "16px",
            color: "#333333",
            borderRadius: "15px",
            border: "1px solid #0497A7",
          }}
        /> */}
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
              selectedFilter={selectedFilter}
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
