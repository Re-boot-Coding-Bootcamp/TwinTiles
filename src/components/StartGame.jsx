import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import { CardDataContext } from "../context/CardDataContext";

const StartGame = () => {
  const { handleStartGame } = useContext(CardDataContext);

  return (
    <Box id="start-game-container">
      <Button
        variant="contained"
        sx={{
          bgcolor: "white",
          color: "black",
          "&:hover": {
            bgcolor: "lightgray",
          },
        }}
        onClick={handleStartGame}
      >
        Start The Game
      </Button>
    </Box>
  );
};

export { StartGame };
