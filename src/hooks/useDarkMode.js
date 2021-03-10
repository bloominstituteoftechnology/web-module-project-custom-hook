import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
  const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage(
    "darkmode-enabled",
    initialValue
  );

  return [darkModeEnabled, setDarkModeEnabled];
};
