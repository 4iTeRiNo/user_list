import patternText from "./errorWords";

export const validateTextPattern = (str: string): boolean => {
  return patternText.test(str.toLowerCase());
};

export const patternValueOfNumber = /^(8|\+7) \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
