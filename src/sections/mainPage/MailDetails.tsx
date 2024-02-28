import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import amazon from "../../assets/Amazon.png";

interface SelectedEmail {
  details: {
    [key: string]: string;
  };
  email_type: string;
  email_use_case: string;
  sender: string;
  subject: string;
  summary: string;
  thread_id: string;
  user_uuid: string;
  uuid: string;
}

const MailDetails: React.FC<{ selectedEmail: SelectedEmail }> = ({
  selectedEmail,
}) => {
  const data = selectedEmail;
  const details = (selectedEmail.details);

  console.log("This is the email details =====>>>>", selectedEmail.details);

  const filteredDetails =
    details &&
    Object.entries(details)
      .filter(([_, value]) => value !== null)
      .map(([title, value]) => ({ title, value }));

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
              {data.email_use_case}
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
        <Typography sx={{ fontSize: "18px", color: "#FFFFFF" }}>
          {data.summary}
        </Typography>
      </Box>

      <Box display="flex" flexWrap="wrap" gap="16px">
        {filteredDetails &&
          filteredDetails
            .filter(
              ({ value }) => value !== null && value !== "" && value !== "N/A"
            )
            .map(({ title, value }) => (
              <Box key={title} width="45%" marginBottom="16px">
                <Typography
                  sx={{ fontSize: "18px", color: "#333333", marginY: "4px" }}
                >
                  {title}
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "#F4F4F4",
                    padding: "8px 16px",
                    borderRadius: "5px",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "#333333",
                      wordWrap: "break-word",
                    }}
                  >
                    {value}
                  </Typography>
                </Box>
              </Box>
            ))}
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
