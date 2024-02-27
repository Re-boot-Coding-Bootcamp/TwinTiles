import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { ASSETS_URL } from "../constants/env";

const SoundContext = createContext();

const SoundContextProvider = ({ children }) => {
  const [backgroundMusic] = useState(
    new Audio(`${ASSETS_URL}/music/background_music.mp3`)
  );
  const [success] = useState(new Audio(`${ASSETS_URL}/music/success.mp3`));
  const [failed] = useState(new Audio(`${ASSETS_URL}/music/failed.mp3`));
  const [hint] = useState(new Audio(`${ASSETS_URL}/music/hint.mp3`));

  const [volume, setVolume] = useState(0.5);
  const [mute, setMute] = useState(false);

  useEffect(() => {
    backgroundMusic.loop = true;
  }, [backgroundMusic]);

  const playBackgroundMusic = () => {
    backgroundMusic.play();
  };

  const playSuccessSound = () => {
    success.load();
    success.play();
  };

  const playFailedSound = () => {
    failed.load();
    failed.play();
  };

  const playHintSound = () => {
    hint.load();
    hint.play();
  };

  const volumeUp = () => {
    if (mute) toggleMute(false);

    if (volume < 1) {
      const newVolume = (volume * 10 + 1) / 10;

      setVolume(newVolume);
      backgroundMusic.volume = newVolume;
      success.volume = newVolume;
      failed.volume = newVolume;
      hint.volume = newVolume;
    }
  };

  const volumeDown = () => {
    if (volume > 0) {
      const newVolume = (volume * 10 - 1) / 10;

      if (newVolume === 0) {
        toggleMute(true);
      }

      setVolume((volume * 10 - 1) / 10);
      backgroundMusic.volume = volume;
      success.volume = volume;
      failed.volume = volume;
      hint.volume = volume;
    }
  };

  const updateVolume = (newVolume) => {
    if (mute) toggleMute(false);

    setVolume(newVolume);
    backgroundMusic.volume = newVolume;
    success.volume = newVolume;
    failed.volume = newVolume;
    hint.volume = newVolume;
  };

  const toggleMute = (isMuted) => {
    setMute(isMuted);
    backgroundMusic.muted = isMuted;
    success.muted = isMuted;
    failed.muted = isMuted;
    hint.muted = isMuted;
  };

  return (
    <SoundContext.Provider
      value={{
        playBackgroundMusic,
        playSuccessSound,
        playFailedSound,
        playHintSound,
        volumeUp,
        volumeDown,
        toggleMute,
        volume,
        mute,
        updateVolume,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export { SoundContextProvider, SoundContext };
