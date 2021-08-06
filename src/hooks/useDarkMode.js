import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = initialVaue => {
  const [value, setValue] = useLocalStorage("darkmode", initialVaue);

  return [value, setValue];
};
