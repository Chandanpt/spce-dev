import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import amazon from "../../assets/Amazon.png";

const MailDetails = () => {
  return (
    <Box
      sx={{
        borderRadius: "15px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 9px 16px #00000017",
        height: "100%",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Image src={amazon} alt="Amazon" width={48} height={48} />
        <Box>
          <Typography
            sx={{ fontSize: "22px", fontWeight: "bold", color: "#333333" }}
          >
            AMAZON
          </Typography>
          <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "bold", color: "#333333" }}
            >
              ORDER CONFIRMATION
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "bold", color: "#0497A7" }}
            >
              25/12/2023 | 10:54 AM
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#0497A7",
          borderRadius: "15px",
          padding: "20px 32px",
        }}
      >
        <Typography sx={{ fontSize: "20px", color: "#FFFFFF" }}>
          An email sent immediately after a customer places an order, confirming
          the details of the order, including items purchased, quantities,
          prices, and shipping information. It often includes an order number
          for reference.
        </Typography>
      </Box>
      <Box display="flex" gap="16px">
        <Box sx={{ width: "50%" }}>
          <Typography
            sx={{ fontSize: "20px", color: "#333333", marginY: "4px" }}
          >
            Number of items
          </Typography>
          <Typography
            sx={{
              backgroundColor: "#F4F4F4",
              fontSize: "18px",
              color: "#333333",
              padding: "8px 16px",
              borderRadius: "5px",
            }}
          >
            4 ITEMS
          </Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Typography
            sx={{ fontSize: "20px", color: "#333333", marginY: "4px" }}
          >
            Expected delivery
          </Typography>
          <Typography
            sx={{
              backgroundColor: "#F4F4F4",
              fontSize: "18px",
              color: "#333333",
              padding: "8px 16px",
              borderRadius: "5px",
            }}
          >
            4 ITEMS
          </Typography>
        </Box>
      </Box>
      <Box display="flex" gap="16px">
        <Box sx={{ width: "50%" }}>
          <Typography
            sx={{ fontSize: "20px", color: "#333333", marginY: "4px" }}
          >
            Delivery address
          </Typography>
          <Typography
            sx={{
              backgroundColor: "#F4F4F4",
              fontSize: "18px",
              color: "#333333",
              padding: "8px 16px",
              borderRadius: "5px",
            }}
          >
            3338 17TH ST.
          </Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Typography
            sx={{ fontSize: "20px", color: "#333333", marginY: "4px" }}
          >
            Confirmation code
          </Typography>
          <Typography
            sx={{
              backgroundColor: "#F4F4F4",
              fontSize: "18px",
              color: "#333333",
              padding: "8px 16px",
              borderRadius: "5px",
            }}
          >
            ABCD123
          </Typography>
        </Box>
      </Box>
      <Box display="flex" gap="16px">
        <Box sx={{ width: "50%" }}>
          <Typography
            sx={{ fontSize: "20px", color: "#333333", marginY: "4px" }}
          >
            Total cost
          </Typography>
          <Typography
            sx={{
              backgroundColor: "#F4F4F4",
              fontSize: "18px",
              color: "#333333",
              padding: "8px 16px",
              borderRadius: "5px",
            }}
          >
            $245.56
          </Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Typography
            sx={{ fontSize: "20px", color: "#333333", marginY: "4px" }}
          >
            Payment method
          </Typography>
          <Typography
            sx={{
              backgroundColor: "#F4F4F4",
              fontSize: "18px",
              color: "#333333",
              padding: "8px 16px",
              borderRadius: "5px",
            }}
          >
            AMEX ..0345
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{ fontSize: "20px", fontWeight: "bold", color: "#333333" }}
      >
        LINKS
      </Typography>
      <Box width="100%" display="flex" justifyContent="center">
        <Typography
          sx={{
            fontSize: "20px",
            color: "#FFFFFF",
            backgroundColor: "#0497A7",
            borderRadius: "24px",
            padding: "12px 24px",
          }}
        >
          View orders on Amazon.com
        </Typography>
      </Box>
    </Box>
  );
};

export default MailDetails;
