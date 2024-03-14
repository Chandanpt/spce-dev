import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import spce from "../../assets/Logo.svg";

export interface SelectedEmail {
  details: {
    [key: string]: string;
  };
  category?: string;
  logo: string;
  date: string;
  email_type: string;
  email_use_case: string;
  sender_name: string;
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
  const eventTicketUpdateDetails = selectedEmail.details;

  let details;

  if (
    eventTicketUpdateDetails &&
    typeof eventTicketUpdateDetails === "object"
  ) {
    if (
      data.email_use_case in eventTicketUpdateDetails &&
      typeof eventTicketUpdateDetails[data.email_use_case] === "object"
    ) {
      details = eventTicketUpdateDetails[data.email_use_case];
    } else {
      details = eventTicketUpdateDetails;
    }
  }

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
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        height: "70vh",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#d9d9d9",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
          margin: "32px 0",
        },
        "&::-webkit-scrollbar-button": {
          display: "none",
        },
        "&::-webkit-scrollbar-corner": {
          background: "transparent",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Image
          src={data.logo === "None" ? spce : data.logo}
          alt="Amazon"
          width={48}
          height={48}
          style={{ objectFit: "contain" }}
          unoptimized
        />
        <Box>
          <Typography
            sx={{ fontSize: "22px", fontWeight: "bold", color: "#333333" }}
          >
            {data.sender_name}
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
              {format(new Date(data.date), "dd/MM/yyyy | hh:mm a")}
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
                    textWrap: "wrap",
                    wordWrap: "break-word",
                    overflow: "hidden",
                  }}
                >
                  {value != null && title.toLowerCase().includes("link") ? (
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "#333333",
                        wordWrap: "break-word",
                        textWrap: "wrap",
                        cursor: "pointer",
                        overflow: "hidden",
                      }}
                    >
                      <Link href={value} target="_blank">
                        {value}
                      </Link>
                    </Typography>
                  ) : (
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "#333333",
                        wordWrap: "break-word",
                        textWrap: "wrap",
                        overflow: "hidden",
                      }}
                    >
                      {value}
                    </Typography>
                  )}
                </Box>
              </Box>
            ))}
      </Box>
    </Box>
  );
};

export default MailDetails;
