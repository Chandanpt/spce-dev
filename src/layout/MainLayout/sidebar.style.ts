import { Accordion, AccordionSummary, styled } from "@mui/material";

export const AccordionWrapper = styled(Accordion)`
  background-color: #f4f4f4;
  width: 80%;
  border: none;
  border-radius: 0 30px 30px 0 !important;
  box-shadow: none;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 12px 0;
  "& .muiaccordion-root::before": {
    background-color: red;
  }
`;

export const CustomSummary = styled(AccordionSummary)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  border-radius: 0 30px 30px 0 !important;
  cursor: pointer;
  background: red;
  "&.Mui-expanded": {
    min-height: 60px;
  };
  "& .MuiAccordionSummary-content": {
    margin: 0;
  };
`;
