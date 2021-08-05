import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("Dark Mode");

  return [darkMode, setDarkMode];
};