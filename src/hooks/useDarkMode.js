import React, { useState, useEffect } from "react";
import useLocalStorage from "./hooks.useDarkMode";

function useDarkMode() {
  const [someValue, setSomeValue] = useLocalStorage("your key here");

  return [];
}

export default useDarkMode;
