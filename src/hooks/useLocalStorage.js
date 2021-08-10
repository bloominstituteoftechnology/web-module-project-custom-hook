import { useState } from "react";

const useLocalStorage = () => {
  const [saved, setSaved] = useState();

  return [saved, setSaved];
};

export default useLocalStorage;
