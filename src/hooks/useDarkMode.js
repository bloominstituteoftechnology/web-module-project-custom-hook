import { useLocalStorage } from "./udeLocalStorage";
export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage("darlmode", intialValue);
  return [value, setValue];
};
