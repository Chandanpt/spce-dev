import { Box, Divider, IconButton, InputBase, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import human from "../../assets/Human.png";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { logout } from "@/redux/features/auth-slice";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = ({
  setIsLoading,
}: {
  setIsLoading: (isLoading: boolean) => void;
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const optionsRef = useRef<HTMLDivElement | null>(null);

  const handleLogout = () => {
    setIsLoading(true);
    dispatch(logout());
    if (sessionStorage.getItem("access_token") === "") {
      router.push("/login");
    }
    if (router.pathname === "/login") {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <Box
      sx={{
        width: "auto",
        backgroundColor: "white",
        height: "max-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        flex: "1",
        borderRadius: "15px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#F4F4F4",
          borderRadius: "5px",
        }}
      >
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase sx={{ flex: 1 }} placeholder="Search" />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <NotificationsNoneIcon />
        <Box position="relative" width="100%" ref={optionsRef}>
          <Image
            src={human}
            alt="Human"
            height="50"
            width="50"
            onClick={() => setShowOptions(!showOptions)}
            style={{ cursor: "pointer" }}
          />
          <Box
            sx={{
              width: "90px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              background: "#FFFFFF",
              position: "absolute",
              marginLeft: "-15px",
              marginTop: "8px",
              borderRadius: "8px",
              boxShadow: "1px 4px 9px 4px #00000017",
              overflow: "hidden",
              maxHeight: showOptions ? "100px" : "0",
              visibility: showOptions ? "visible" : "hidden",
              transition:
                "max-height 0.2s ease-in-out, visibility 0.2s ease-in-out",
            }}
          >
            <Link
              href={"/profile"}
              style={{ color: "#000000", textDecoration: "none" }}
            >
              <Typography
                sx={{
                  padding: "4px 16px",
                  cursor: "pointer",
                }}
              >
                Profile
              </Typography>
            </Link>
            <Box>
              <Typography
                sx={{
                  padding: "4px 16px",
                  cursor: "pointer",
                }}
                onClick={handleLogout}
              >
                Log out
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
