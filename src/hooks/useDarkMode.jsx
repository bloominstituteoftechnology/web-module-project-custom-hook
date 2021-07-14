import useLocalStorage from "./useLocalStorage";

export const useDarkMode = (key) => {
  const [darkMode, setDarkMode] = useLocalStorage(false);
  setDarkMode(!darkMode);
  return darkMode;
};
