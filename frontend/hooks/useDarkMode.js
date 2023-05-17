import { useLocalStorage } from "./useLocalStorage";
export const useDarkMode = (value) => {
  const [darkMode, setDarkMode] = useLocalStorage(value);
  return [darkMode, setDarkMode];
};
