import { Box, Button, Typography } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import React, { useContext } from "react";
import { CardDataContext } from "../context/CardDataContext";
import { LeaderBoard } from "./LeaderBoard";
import { Levels } from "../constants";

const GameCompletion = () => {
  const {
    handleStartGame,
    timeTakenDisplayValue,
    moves,
    level,
    fourLeaderBoard,
    sixLeaderBoard,
    eightLeaderBoard,
  } = useContext(CardDataContext);
  const leaderBoardData = {
    [Levels["4x4"].label]: fourLeaderBoard,
    [Levels["6x6"].label]: sixLeaderBoard,
    [Levels["8x8"].label]: eightLeaderBoard,
  };

  return (
    <Box display="flex" flexDirection="column" gap={5}>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Typography variant="h3">🎉</Typography>
        <Typography color="white">Well done!</Typography>
        <Box>
          <Typography color="white">Time: {timeTakenDisplayValue}</Typography>
          <Typography color="white">Moves: {moves}</Typography>
        </Box>
        <Button
          variant="contained"
          endIcon={<RestartAltIcon />}
          onClick={handleStartGame}
        >
          Play Again
        </Button>
      </Box>
      <LeaderBoard level={level.label} data={leaderBoardData[level.label]} />
    </Box>
  );
};

export { GameCompletion };
