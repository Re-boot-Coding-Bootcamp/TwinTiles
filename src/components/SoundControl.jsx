import { Badge, Box, Button, IconButton, Popover, Slider } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";

import { useContext, useState } from "react";
import { SoundContext } from "../context/SoundContext";

const SoundControl = () => {
  const { volumeUp, volumeDown, toggleMute, volume, mute, updateVolume } =
    useContext(SoundContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "sound-control-popover" : undefined;

  const handleVolumeChange = (_event, newVolume) => {
    updateVolume(newVolume);
  };

  return (
    <Box id="sound-control-container" position="fixed" left="0" bottom="0">
      <IconButton
        color={mute ? "error" : "primary"}
        onClick={handleClick}
        sx={{
          p: 3,
        }}
      >
        <Badge badgeContent={`${Math.floor(volume * 100)}%`}>
          <VolumeUpIcon sx={{ fontSize: 32 }} />
        </Badge>
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box display="flex" alignItems="center" gap="3px" p={1}>
          <IconButton color="inherit" onClick={volumeDown}>
            <VolumeDownIcon />
          </IconButton>

          <Box
            id="slider-container"
            width={"150px"}
            display="flex"
            alignItems="center"
          >
            <Slider
              aria-label="Volume"
              defaultValue={volume}
              min={0.0}
              max={1.0}
              step={0.1}
              value={volume}
              onChange={handleVolumeChange}
            />
          </Box>

          <IconButton color="inherit" onClick={volumeUp}>
            <VolumeUpIcon />
          </IconButton>

          <Button
            endIcon={<VolumeOffIcon />}
            onClick={() => toggleMute(!mute)}
            color={mute ? "error" : "inherit"}
          >
            {mute ? "Unmute" : "Mute"}
          </Button>
        </Box>
      </Popover>
    </Box>
  );
};

export default SoundControl;
