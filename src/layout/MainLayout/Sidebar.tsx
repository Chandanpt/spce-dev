import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Drawer,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/Logo.svg";
import data from "./SidebarData";
import downArrow from "../../assets/Down_Arrow.svg";
import activeDownArrow from "../../assets/Down_Arrow_Active.svg";
import Image from "next/image";
import { AccordionWrapper } from "./sidebar.style";
import { useAppSelector } from "@/redux/store";

const Sidebar = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState<number | false>(
    false
  );

  const handleAccordionChange = (index: number) => {
    setExpandedAccordion((prev) => (prev === index ? false : index));
  };

  const calculateAccordionHeight = (index: number): string => {
    return expandedAccordion === index ? "auto" : "40px";
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "300px",
          height: "100vh",
          backgroundColor: "#FFFFFF",
          borderRadius: "30px",
          boxShadow: "none",
          border: "none",
          overflow: "hidden",
          position: "relative",
        },
      }}
      open
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingY: "20px",
          marginX: "20px",
          borderBottom: "2px solid #F4F4F4",
        }}
      >
        <Image src={logo} alt="Logo" width={80} height={80} />
      </Box>

      <Box sx={{ marginY: "50px" }}>
        {data.map((item, index) => (
          <Box key={item.title}>
            <AccordionWrapper
              sx={{
                backgroundColor:
                  expandedAccordion === index ? "#0497A7" : "#F4F4F4",
              }}
              onChange={() => handleAccordionChange(index)}
              expanded={index === expandedAccordion}
            >
              <AccordionSummary
                expandIcon={
                  expandedAccordion === index ? (
                    <Box sx={{rotate: "180deg"}}><Image src={activeDownArrow} alt="Expand" /></Box>
                  ) : (
                    <Image src={downArrow} alt="Expand" />
                  )
                }
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  position: "absolute",
                  cursor: "pointer",
                }}
              >
                <Box display="flex" width="100%" gap="8px">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={20}
                    height={20}
                  />
                  <Typography
                    sx={{ fontSize: "17px", color: "#333333", width: "100%" }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#333333",
                    textWrap: "nowrap",
                    marginRight: "8px",
                  }}
                >
                  2 New
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  sx={{
                    zIndex: 1,
                    bgcolor: "background.paper",
                    position: "relative",
                    marginTop: "230px",
                    height: calculateAccordionHeight(index),
                    transition: "height 0.3s ease",
                    "& .MuiStepConnector-line": {
                      borderColor: "#E3E3E3",
                      borderLeftWidth: "2px",
                      height: "30px",
                    },
                    "& .MuiSvgIcon-root ": {
                      cursor: "pointer",
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#E3E3E3",
                      color: "#E3E3E3",
                      marginLeft: "10px",
                      borderRadius: "50%",
                      position: "absolute",
                      "& .MuiStepIcon-text": {
                        content: "''",
                        display: "none",
                      },
                      "&.Mui-completed": {
                        backgroundColor: "#E3E3E3",
                        color: "#E3E3E3",
                      },
                      "&.Mui-active": {
                        color: "#0497A7",
                      },
                    },
                    "& .MuiStepLabel-label": {
                      color: "#333333",
                      fontSize: "14px",
                      marginLeft: "30px",
                      marginTop: "-10px",
                      marginBottom: "-20px",
                      padding: "4px 12px",
                      "&.Mui-active": {
                        borderRadius: "4px",
                        backgroundColor: "#ECECEC",
                      },
                    },
                  }}
                >
                  <Box sx={{ maxWidth: "400px" }}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                      {item.subtitle.map((subItem, index) => (
                        <Step key={index}>
                          <StepLabel
                            onClick={() => setActiveStep(index)}
                            sx={{
                              "&.MuiStepLabel-root": {
                                padding: "0px",
                                margin: "0px",
                              },
                            }}
                          >
                            {subItem}
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </Box>
                </Box>
              </AccordionDetails>
            </AccordionWrapper>
          </Box>
        ))}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
