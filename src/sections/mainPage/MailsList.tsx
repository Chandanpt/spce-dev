import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import amazon from "../../assets/Amazon.png";
import axios from "axios";
import pin from "../../assets/pin.svg";
import bluePin from "../../assets/blue_pin.svg";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { format } from "date-fns";

interface EmailDataTypes {
  logo: string;
  date: string;
  email_use_case: string;
  summary: string;
}

interface MailProps {
  onSelectEmail: (email: string) => void;
  selectedEmailType: string;
}

const Mail: React.FC<MailProps> = ({ onSelectEmail, selectedEmailType }) => {
  const [emailData, setEmailData] = useState<EmailDataTypes[]>([]);
  const [filteredEmailData, setFilteredEmailData] = useState<EmailDataTypes[]>(
    []
  );
  const [selectedMail, setSelectedMail] = useState(-1);

  const getMailData = () => {
    const accessToken = sessionStorage.getItem("access_token");
    if (accessToken) {
      axios
        .get("http://192.168.0.12:8000/me", {
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
  };

  const handleEmailClick = (index: number) => {
    setSelectedMail(index);
    const selectedEmail = emailData[index];
    onSelectEmail(selectedEmail);
  };

  useEffect(() => {
    if (emailData.length !== 0) {
      console.log("Checking where the data going");
      const filteredData = emailData.filter(
        (item: any) => item.email_type === selectedEmailType
      );
      const filteredDetails = filteredData.map((item: any) => ({
        ...item,
        details: JSON.parse(item.details),
      }));
      setFilteredEmailData(filteredDetails);
      console.log(
        "Checking where the data going ======>>>>>>>>",
        filteredData
      );
    } else {
      getMailData();
    }
    console.log("This is the email data ==>>", emailData);
    console.log("Thiss is the selecetedEmailtype", selectedEmailType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedEmailType]);

  return (
    <Box display="flex" flexDirection="column" gap="8px">
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
          <Box>
            {/* <Image src={item.logo} alt="Amazon" width={42} height={42} /> */}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                <Image src={index === selectedMail ? bluePin : pin} alt="Pin" />
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
  );
};

export default Mail;
