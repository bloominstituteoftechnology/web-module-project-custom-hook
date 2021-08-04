import { useLocalStorage } from "./useLocalStorage";
export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("ItsOn");
  return [darkMode, setDarkMode];
};
