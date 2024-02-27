import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React, { useContext } from "react";
import { orange } from "@mui/material/colors";
import { CardDataContext } from "../context/CardDataContext";
import { Timer } from "./Timer";
import MoveCounter from "./MoveCounter";
import { Link, Outlet, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import Logo from "./Logo";

const Navbar = () => {
  const { gameStarted, gameCompleted } = useContext(CardDataContext);
  const { pathname } = useLocation();

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: orange[300] }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box id="navbar-left-side" display="flex" alignItems="center" gap={2}>
            <Logo />
            <Button
              component={Link}
              to="/"
              color="inherit"
              startIcon={pathname === "/" ? <HomeIcon /> : <HomeOutlinedIcon />}
              sx={{
                fontWeight: pathname === "/" ? 600 : 500,
              }}
            >
              Home
            </Button>

            <Button
              component={Link}
              to="/leaderboard"
              color="inherit"
              startIcon={
                pathname === "/leaderboard" ? (
                  <LeaderboardIcon />
                ) : (
                  <LeaderboardOutlinedIcon />
                )
              }
              sx={{
                fontWeight: pathname === "/leaderboard" ? 600 : 500,
              }}
            >
              Leaderboard
            </Button>
          </Box>
          <Box
            id="navbar-right-side"
            display="flex"
            gap={2}
            alignItems="center"
          >
            {gameStarted && !gameCompleted && (
              <>
                <Timer />
                <MoveCounter />
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* the outlet is for the child route componenets to be rendered */}
      <Box id="main-container" display="flex" justifyContent="center" my={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Navbar;
