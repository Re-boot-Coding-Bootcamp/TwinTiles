import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Box
      component={Link}
      to={"/"}
      id="logo"
      sx={{
        color: "black",
        textDecoration: "none",
      }}
    >
      <Typography
        variant="overline"
        fontWeight={700}
        fontSize={18}
        border={"2px solid black"}
        lineHeight={"unset"}
        p={0.5}
      >
        TwinTiles
      </Typography>
    </Box>
  );
};

export default Logo;
