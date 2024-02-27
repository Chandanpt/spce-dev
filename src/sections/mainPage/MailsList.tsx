import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import amazon from "../../assets/Amazon.png";
import axios from "axios";
import pin from "../../assets/pin.svg";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

interface EmailDataTypes {
  email_use_case: string;
  summary: string;
}

const Mail = () => {
  const [emailData, setEmailData] = useState<EmailDataTypes[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Tickets");
  const [selectedEmail, setSelectedEmail] = useState(1);

  const dispatch = useDispatch<AppDispatch>();

  const getProfileData = () => {
    const accessToken = sessionStorage.getItem("access_token");
    if (accessToken) {
      axios
        .get("http://192.168.0.12:8000/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          // setProfileData(response.data);
          console.log("This is the profile data", response.data.Emails);
          const filteredData = response?.data?.Emails.filter(
            (item: any) => item.email_type === selectedCategory
          );
          const filteredDetails = filteredData.map((item: any) => ({
            ...item,
            details: JSON.parse(item.details),
          }));
          console.log("This is the dataaaa ===>>>", filteredDetails);
          setEmailData(filteredDetails);
        })
        .catch((error) => {
          console.error("Error fetching profile data", error);
        });
    }
  };

  const handleEmailClick = (index: number) => {
    console.log("Selected Email Details:", index);
    setSelectedEmail(index);
    const selectedEmail = emailData[index];
    console.log("This is the selectedEmail", selectedEmail);
    // dispatch()
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <Box display="flex" flexDirection="column" gap="8px">
      {emailData.map((item, index) => (
        <Box
          sx={{ display: "flex", gap: "8px", cursor: "pointer" }}
          key={index}
          onClick={() => handleEmailClick(index)}
        >
          <Box>
            <Image src={amazon} alt="Amazon" width={42} height={42} />
          </Box>
          <Box>
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
                <Box sx={{}}>
                  <Image
                    src={pin}
                    alt="Pin"
                    style={{ color: index === selectedEmail ? "red" : "green" }}
                  />
                </Box>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "#0497A7",
                  }}
                >
                  February 1, 2024 | 10:54 AM
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                fontSize: "12px",
                fontWeight: index === selectedEmail ? "bold" : "regular",
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
  );
};

export default Mail;
