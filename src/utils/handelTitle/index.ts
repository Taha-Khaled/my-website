export const handelTitle = (text: string): string => {
  return text.includes("#") ? `Taha | ${text.replace("/#", "")}` : "Taha";
};
