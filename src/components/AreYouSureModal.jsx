import { Backdrop, Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import { CardDataContext } from "../context/CardDataContext";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const AreYouSureModal = () => {
  const { handleNewGame } = useContext(CardDataContext);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<SportsEsportsIcon />}
        onClick={toggleModal}
      >
        New Game
      </Button>

      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={modalOpen}
      >
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: 0.5,
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="h6">Are you sure? 👀</Typography>
          <Typography mb={3}>Your game progress will be lost!</Typography>
          <Box display="flex" gap={1}>
            <Button variant="contained" color="info" onClick={toggleModal}>
              No, back to game
            </Button>
            <Button variant="contained" color="error" onClick={handleNewGame}>
              I'm sure
            </Button>
          </Box>
        </Box>
      </Backdrop>
    </>
  );
};

export { AreYouSureModal };
