import { useState } from "react";

export const useDarkMode = (value) => {
  const [darkMode, setDarkMode] = useState(value);
  return [darkMode, setDarkMode];
};
