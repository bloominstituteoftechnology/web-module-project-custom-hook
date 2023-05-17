import { useLocalStorage } from "./useLocalStorage";
export const useDarkMode = (value) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", value);
  return [darkMode, setDarkMode];
};
