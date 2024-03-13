import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import amazon from "../../assets/Amazon.png";
import axios from "axios";
import pin from "../../assets/pin.svg";
import bluePin from "../../assets/blue_pin.svg";
import { format } from "date-fns";
import { SelectedEmail } from "./MailDetails";
import spce from "../../assets/Logo.svg";
import Loader from "@/components/Loader";

interface MailProps {
  onSelectEmail: (email: SelectedEmail | null) => void;
  selectedEmailType: string;
}

const Mail: React.FC<MailProps> = ({ onSelectEmail, selectedEmailType }) => {
  const [emailData, setEmailData] = useState<SelectedEmail[]>([]);
  const [filteredEmailData, setFilteredEmailData] = useState<SelectedEmail[]>(
    []
  );
  const [selectedMail, setSelectedMail] = useState(-1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMailData = () => {
    setIsLoading(true);
    const accessToken = sessionStorage.getItem("access_token");
    if (accessToken) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/me`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          setEmailData(response?.data?.Emails);
          const filteredData = response?.data?.Emails.filter(
            (item: any) => item.email_type === selectedEmailType
          );
          const filteredDetails = filteredData.map((item: any) => ({
            ...item,
            details: JSON.parse(item.details),
          }));
          setFilteredEmailData(filteredDetails);
        })
        .catch((error) => {});
    }
    setIsLoading(false);
  };

  const handleEmailClick = (index: number) => {
    console.log("This is the selected email", filteredEmailData[index]);
    setSelectedMail(index);
    const selectedEmail = filteredEmailData[index];
    onSelectEmail(selectedEmail);
  };

  useEffect(() => {
    setSelectedMail(-1);
    onSelectEmail(null);
    if (emailData.length !== 0) {
      setIsLoading(true);
      const filteredData = emailData.filter(
        (item: any) => item.email_type === selectedEmailType
      );
      const filteredDetails = filteredData.map((item: any) => ({
        ...item,
        details: JSON.parse(item.details),
      }));
      setFilteredEmailData(filteredDetails);
      setIsLoading(false);
    } else {
      getMailData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedEmailType]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingRight: "20px",
            gap: "8px",
            height: "63vh",
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
            },
            "&::-webkit-scrollbar-button": {
              display: "none",
            },
            "&::-webkit-scrollbar-corner": {
              background: "transparent",
            },
          }}
        >
          {filteredEmailData.length === 0 && (
            <Box
              sx={{
                width: "100%",
                background: "transparent",
                height: "100%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "32px", fontWeight: "700", color: "", marginTop: "32px" }}
              >
                No data found!
              </Typography>
            </Box>
          )}
          {filteredEmailData.map((item, index) => (
            <Box
              sx={{
                display: "flex",
                gap: "8px",
                cursor: "pointer",
                marginBottom: "8px",
              }}
              key={index}
              onClick={() => handleEmailClick(index)}
            >
              <Box
                sx={{
                  borderRadius: "42px",
                  minHeight: "42px",
                  height: "42px",
                  minWidth: "42px",
                  width: "42px",
                  overflow: "hidden",
                  border:
                    index === selectedMail
                      ? "2px solid #0497A7"
                      : "1px solid #0497A7",
                  padding: "2px",
                }}
              >
                <Image
                  src={item.logo === "None" ? spce : item.logo}
                  alt="Amazon"
                  width={42}
                  height={42}
                  style={{ objectFit: "contain" }}
                  unoptimized
                />
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", gap: "8px" }}>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "#333333",
                      }}
                    >
                      {item.email_use_case}
                    </Typography>
                    <Image
                      src={index === selectedMail ? bluePin : pin}
                      alt="Pin"
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        color: "#0497A7",
                      }}
                    >
                      {format(new Date(item.date), "MMMM d, yyyy | hh:mm a")}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    fontSize: "12px",
                    fontWeight: index === selectedMail ? "bold" : "regular",
                    color: "#333333",
                    fontFamily: "sans-serif",
                  }}
                >
                  {item.summary}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default Mail;
