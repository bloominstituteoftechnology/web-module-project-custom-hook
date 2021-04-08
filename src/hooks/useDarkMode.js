// import { useState } from 'react';
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key) =>
{
    const [thedarkmode, setthedarkmode] = useLocalStorage(key, false);
    return (thedarkmode, setthedarkmode);
}

export default useDarkMode;