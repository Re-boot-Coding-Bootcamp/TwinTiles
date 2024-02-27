import { Box, useMediaQuery } from "@mui/material";
import { orange } from "@mui/material/colors";
import React, { useContext } from "react";
import { CardDataContext } from "../context/CardDataContext";
import theme from "../theme";

const Card = ({ data, size }) => {
  const { id, imageUrl, isFlipped, isMatched, hint } = data;
  const { handleCardClick } = useContext(CardDataContext);
  const tabletOrSmaller = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMatched ? (
        <Box height={size} width={size}></Box>
      ) : (
        <Box
          height={size}
          width={size}
          sx={{
            bgcolor: isFlipped ? "none" : "white",
            ...(tabletOrSmaller
              ? {}
              : {
                  "&:hover": {
                    bgcolor: isFlipped ? "none" : orange[200],
                  },
                }),
            ...(hint ? hintAnimation : {}),
          }}
          onClick={() => handleCardClick(data)}
        >
          {isFlipped ? (
            <img
              src={imageUrl}
              alt={`card-${id}`}
              loading="lazy"
              height="100%"
            />
          ) : null}
        </Box>
      )}
    </>
  );
};

export { Card };

const hintAnimation = {
  animationName: "wiggle",
  animationDuration: "0.3s",
};
