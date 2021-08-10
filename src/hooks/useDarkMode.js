import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
