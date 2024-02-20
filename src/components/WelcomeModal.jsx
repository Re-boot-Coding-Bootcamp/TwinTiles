import { Backdrop, Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import { CardDataContext } from "../context/CardDataContext";
import { SoundContext } from "../context/SoundContext";

const WelcomeModal = () => {
  const { userName, updateUserName } = useContext(CardDataContext);
  const { playBackgroundMusic } = useContext(SoundContext);

  const [userNameInputValue, setUserNameInputValue] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleUserNameUpdate = () => {
    const currentUserNameValue = userNameInputValue.trim();
    if (currentUserNameValue) {
      updateUserName(currentUserNameValue);
      playBackgroundMusic();
      setUserNameInputValue("");
    } else {
      setHasError(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleUserNameUpdate();
    }
  };

  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={!userName}
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
        <Typography variant="h6">Hi there! 👋</Typography>
        <Box>
          <Typography>Welcome to the Memory Card Game!</Typography>
          <Typography>Enter your name below to start.</Typography>
        </Box>
        <TextField
          id="username-input"
          label="Your Name / Nickname"
          variant="standard"
          value={userNameInputValue}
          onChange={(e) => {
            if (hasError) setHasError(false);
            setUserNameInputValue(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          error={hasError}
        />
        <Button variant="contained" onClick={handleUserNameUpdate}>
          Let's Go!
        </Button>
      </Box>
    </Backdrop>
  );
};

export { WelcomeModal };
