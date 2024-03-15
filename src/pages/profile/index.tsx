import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import human from "../../assets/Human.png";
import EditButton from "@/components/EditButtton";
import axios from "axios";
import MainLayout from "@/layout/MainLayout";
import Header from "@/layout/MainLayout/Header";

interface UserDataTypes {
  username: string;
  email: string;
}

const Profile = () => {
  const [userData, setuserData] = useState<UserDataTypes>();

  const getProfileData = () => {
    const accessToken = sessionStorage.getItem("access_token");
    if (accessToken) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/me`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          // setProfileData(response.data);
          setuserData(response?.data?.User);
        })
        .catch((error) => {
          console.error("Error fetching profile data", error);
        });
    }
  };
  useEffect(() => {
    getProfileData();
  }, []);

  return (
    // <MainLayout selectEmailCheck={() => {}}>
    <Box sx={{ padding: "32px" }}>
      <Header setIsLoading={() => {}} />
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#333333",
          marginLeft: "24px",
          marginBottom: "24px",
        }}
      >
        Profile settings
      </Typography>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          border: "none",
          borderRadius: "15px",
          boxShadow: "0px 9px 16px #00000017",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 24px",
            border: "1px solid #0497A7",
            borderRadius: "16px",
          }}
        >
          <Box width="100%">
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Image src={human} alt="Human" height="100" width="100" />
              <Typography
                sx={{ fontSize: "18px", color: "#333333", fontWeight: "bold" }}
              >
                Personal Information
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box sx={{ width: "60%" }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", width: "100%" }}
                >
                  <Box sx={{ width: "100%", marginY: "8px" }}>
                    <Typography sx={{ fontSize: "16px", color: "#0497A7" }}>
                      User Name
                    </Typography>
                    <Typography sx={{ fontSize: "16px", color: "#333333" }}>
                      {userData?.username}
                    </Typography>
                  </Box>
                  <Box sx={{ width: "100%", marginY: "8px" }}>
                    <Typography sx={{ fontSize: "16px", color: "#0497A7" }}>
                      Email Address
                    </Typography>
                    <Typography sx={{ fontSize: "16px", color: "#333333" }}>
                      {userData?.email}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* <EditButton title="Edit" onClick={() => console.log("Edit")} /> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    //</MainLayout>
  );
};

export default Profile;
