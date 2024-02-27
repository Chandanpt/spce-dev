import { Accordion, styled } from "@mui/material";

export const AccordionWrapper = styled(Accordion)`
  background-color: #f4f4f4;
  width: 80%;
  border-radius: 0 30px 30px 0 !important;
  border: none;
  box-shadow: none;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0;
  "& .MuiAccordion-root::before": {
    background-color: red;
  }
`;

// sx={{
//   backgroundColor: index === 1 ? "#0497A7" : "#F4F4F4",
//   width: "80%",
//   borderRadius: "0 30px 30px 0 !important",
//   border: "none",
//   boxShadow: "none",
//   height: "40px",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
//   marginY: "12px",
//   "& .MuiAccordion-root::before": {
//     backgroundColor: "red",
//   },
// }}