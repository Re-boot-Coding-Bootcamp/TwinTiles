import React, { useContext, useState } from "react";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { grey, orange } from "@mui/material/colors";
import { Alert, Button, Snackbar } from "@mui/material";
import { CardDataContext } from "../context/CardDataContext";
import { SoundContext } from "../context/SoundContext";

const Hint = () => {
  const { playHintSound, cardDataUpdating } = useContext(SoundContext);
  const { handleHintClick, maxNumberOfHints } = useContext(CardDataContext);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [hints, setHints] = useState(maxNumberOfHints);
  const onHintClick = () => {
    playHintSound();
    setOpenSnackbar(true);
    setHints((prev) => prev - 1);
    handleHintClick();
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={<TipsAndUpdatesIcon />}
        onClick={onHintClick}
        disabled={hints === 0 || cardDataUpdating}
        sx={{
          "&.Mui-disabled": {
            color: grey[500],
            backgroundColor: orange[100],
            border: `1px solid ${orange[100]}`,
          },
        }}
      >
        Hint ({`${hints} left`})
      </Button>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={1500}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          3 seconds added to penalty time.
        </Alert>
      </Snackbar>
    </>
  );
};

export { Hint };
