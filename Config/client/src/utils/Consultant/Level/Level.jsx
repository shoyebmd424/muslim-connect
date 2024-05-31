export const getConsultantLevel = (sessions) => {
  switch (sessions) {
    case sessions > 200:
      return "Mentor";
    case sessions > 100:
      return "Expert";
    case sessions <= 100 && sessions > 50:
      return "Premium";
    case sessions <= 50 && sessions > 5:
      return "Engaged";
    default:
      return "New";
  }
};

export const getNextLevelValue = (sessions) => {
  const level = getConsultantLevel(sessions);
  switch (level) {
    case level === "Expert":
      return { nextLevel: "Mentor", remain: 500 - sessions, totalLevel: 500 };
    case level === "Premium":
      return { nextLevel: "Expert", remain: 200 - sessions, totalLevel: 200 };
    case level === "Engaged":
      return { nextLevel: "Premium", remain: 100 - sessions, totalLevel: 100 };
    default:
      return { nextLevel: "Engaged", remain: 50 - sessions, totalLevel: 50 };
  }
};
