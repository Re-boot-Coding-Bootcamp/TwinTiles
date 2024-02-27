const Levels = {
  "4x4": {
    numberOfCards: 16,
    hints: 2,
    label: "4x4",
  },
  "6x6": {
    numberOfCards: 36,
    hints: 3,
    label: "6x6",
  },
  "8x8": {
    numberOfCards: 64,
    hints: 5,
    label: "8x8",
  },
};

const Speeds = {
  fast: 250,
  medium: 500,
  slow: 1000,
};

const LocalStorageKeys = {
  UserName: "twintiles-username",
  FourLeaderBoard: "twintiles-leaderboard-4x4",
  SixLeaderBoard: "twintiles-leaderboard-6x6",
  EightLeaderBoard: "twintiles-leaderboard-8x8",
};

export { Levels, Speeds, LocalStorageKeys };
