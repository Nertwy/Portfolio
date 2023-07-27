
type Flag = "🇺🇸" | "🇺🇦" | "🇵🇱";

export const stringToFlag = (flagName: string): Flag => {
  let result: Flag = "🇺🇸";
  switch (flagName) {
    case "pl":
      result = "🇵🇱";
      break;
    case "en":
      result = "🇺🇸";
      break;
    case "uk":
      result = "🇺🇦";
      break;
  }
  return result;
};
