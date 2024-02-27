import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import human from "../../assets/Human.png";
import EditButton from "@/components/EditButtton";
import axios from "axios";
import Layout from "@/layout";

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
        .get("http://192.168.0.12:8000/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          // setProfileData(response.data);
          console.log("This is the profile data", response.data.User);
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
    <Layout>
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
          <Box sx={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <Image src={human} alt="Human" height="100" width="100" />
            <Box>
              <Typography>{userData?.username}</Typography>
              <Typography>Team Manager</Typography>
              <Typography>Leads, USA</Typography>
            </Box>
          </Box>
          <EditButton title="Edit" onClick={() => console.log("Edit")} />
        </Box>
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
          <Box width="80%">
            <Typography
              sx={{ fontSize: "18px", color: "#333333", fontWeight: "bold" }}
            >
              Personal Information
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box sx={{ width: "80%" }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", width: "100%" }}
                >
                  <Box sx={{ width: "100%", marginY: "8px" }}>
                    <Typography sx={{ fontSize: "16px", color: "#0497A7" }}>
                      First Name
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
                <Box
                  sx={{ display: "flex", alignItems: "center", width: "100%" }}
                >
                  <Box sx={{ width: "100%", marginY: "8px" }}>
                    <Typography sx={{ fontSize: "16px", color: "#0497A7" }}>
                      Phone
                    </Typography>
                    <Typography sx={{ fontSize: "16px", color: "#333333" }}>
                      +1 888 888 888
                    </Typography>
                  </Box>
                  <Box sx={{ width: "100%", marginY: "8px" }}>
                    <Typography sx={{ fontSize: "16px", color: "#0497A7" }}>
                      Bio
                    </Typography>
                    <Typography sx={{ fontSize: "16px", color: "#333333" }}>
                      Team Manager
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <EditButton title="Edit" onClick={() => console.log("Edit")} />
        </Box>
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
          <Box width="80%">
            <Typography
              sx={{ fontSize: "18px", color: "#333333", fontWeight: "bold" }}
            >
              Address
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box sx={{ width: "80%" }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", width: "100%" }}
                >
                  <Box sx={{ width: "100%", marginY: "8px" }}>
                    <Typography sx={{ fontSize: "16px", color: "#0497A7" }}>
                      Country
                    </Typography>
                    <Typography sx={{ fontSize: "16px", color: "#333333" }}>
                      USA
                    </Typography>
                  </Box>
                  <Box sx={{ width: "100%", marginY: "8px" }}>
                    <Typography sx={{ fontSize: "16px", color: "#0497A7" }}>
                      City/State
                    </Typography>
                    <Typography sx={{ fontSize: "16px", color: "#333333" }}>
                      New York
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", width: "100%" }}
                >
                  <Box sx={{ width: "100%", marginY: "8px" }}>
                    <Typography sx={{ fontSize: "16px", color: "#0497A7" }}>
                      Postal Code
                    </Typography>
                    <Typography sx={{ fontSize: "16px", color: "#333333" }}>
                      ERT 2354
                    </Typography>
                  </Box>
                  <Box sx={{ width: "100%", marginY: "8px" }}>
                    <Typography sx={{ fontSize: "16px", color: "#0497A7" }}>
                      Tax ID
                    </Typography>
                    <Typography sx={{ fontSize: "16px", color: "#333333" }}>
                      AS54781263
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <EditButton title="Edit" onClick={() => console.log("Edit")} />
        </Box>
      </Box>
    </Layout>
  );
};

export default Profile;
