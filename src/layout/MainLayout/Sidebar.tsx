import React, { useState } from "react";
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
import Image from "next/image";
import { AccordionWrapper, CustomSummary } from "./sidebar.style";
import logo from "../../assets/Logo.svg";
import accounts from "../../assets/Accounts.svg";
import active_accounts from "../../assets/active_accounts.svg";
import transactional from "../../assets/transactional.svg";
import active_transactional from "../../assets/Active_Transactional.svg";
import marketing from "../../assets/Marketing.svg";
import active_marketing from "../../assets/active_marketing.svg";
import personal from "../../assets/Personal.svg";
import active_personal from "../../assets/active_personal.svg";
import action from "../../assets/action.svg";
import active_action from "../../assets/active_action.svg";
import pin from "../../assets/pin.svg";
import active_pin from "../../assets/active_pin.svg";
import downArrow from "../../assets/Down_Arrow.svg";
import activeDownArrow from "../../assets/Down_Arrow_Active.svg";

const sidebarData = [
  {
    title: "Accounts",
    subtitle: [
      "Notifications",
      "Security Alerts",
      "Service Messages",
      "Updates",
    ],
    image: accounts,
    selectedImage: active_accounts,
  },
  {
    title: "Transactional",
    subtitle: [
      "Reservation",
      "Orders",
      "Appointments",
      "Tickets",
      "Subscriptions",
      "Payments",
    ],
    image: transactional,
    selectedImage: active_transactional,
  },
  {
    title: "Marketing",
    subtitle: ["Invites", "Newsletter", "Promotions", "Survey"],
    image: marketing,
    selectedImage: active_marketing,
  },
  {
    title: "Personal",
    subtitle: ["Personal"],
    image: personal,
    selectedImage: active_personal,
  },
  {
    title: "Action Required",
    subtitle: ["Action Required"],
    image: action,
    selectedImage: active_action,
  },
  {
    title: "Pinned",
    subtitle: ["Pinned"],
    image: pin,
    selectedImage: active_pin,
  },
];

const Sidebar = ({ onSelectEmailType }: { onSelectEmailType: (cat: string) => void }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [expandedAccordion, setExpandedAccordion] = useState<number | false>(
    false
  );

  const handleAccordionChange = (index: number) => {
    setExpandedAccordion((prev) => (prev === index ? false : index));
  };

  const calculateAccordionHeight = (index: number): string => {
    return expandedAccordion === index ? "auto" : "40px";
  };
  const data = sidebarData;

  const handleCategory = (index: number, cat: string) => {
    console.log("This is the index", cat);
    setActiveStep(index);
    onSelectEmailType(cat);
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
                  expandedAccordion === index ? "#FFFFFF" : "#F4F4F4",
              }}
              onChange={() => handleAccordionChange(index)}
              expanded={index === expandedAccordion}
            >
              <CustomSummary
                expandIcon={
                  expandedAccordion === index ? (
                    <Box sx={{ rotate: "180deg" }}>
                      <Image src={activeDownArrow} alt="Expand" />
                    </Box>
                  ) : (
                    <Image src={downArrow} alt="Expand" />
                  )
                }
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  backgroundColor:
                    expandedAccordion === index ? "#0497A7" : "#F4F4F4",
                  color: expandedAccordion === index ? "#FFFFFF" : "#333333",
                  width: "100%",
                }}
              >
                <Box display="flex" width="100%" gap="8px">
                  <Image
                    src={
                      expandedAccordion === index
                        ? item.selectedImage
                        : item.image
                    }
                    alt={item.title}
                    width={20}
                    height={20}
                  />
                  <Typography sx={{ fontSize: "16px", width: "100%" }}>
                    {item.title}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    textWrap: "nowrap",
                    marginRight: "8px",
                  }}
                >
                  2 New
                </Typography>
              </CustomSummary>
              <AccordionDetails>
                <Box
                  sx={{
                    zIndex: 1,
                    paddingY: "16px",
                    bgcolor: "background.paper",
                    position: "relative",
                    height: calculateAccordionHeight(index),
                    transition: "height 0.1s ease",
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
                      marginLeft: "20px",
                      marginTop: "-10px",
                      marginBottom: "-20px",
                      padding: "4px 12px",
                      cursor: "pointer",
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
                        <Step
                          key={index}
                          onClick={() => handleCategory(index, subItem)}
                        >
                          <StepLabel
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
