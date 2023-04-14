import React from "react";
import { useState } from "react";

export const useLocalStorage = (key, initialvalue) => {
const [state, setState] = useState(() =>{
if (window.localStorage.getItem(key)) {
    setState(JSON.parse(localStorage.getItem(key)))
}
localStorage.getItem(key, JSON.stringify(initialvalue));
return initialvalue;
})

const setStoredState = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value)
}

return ([state, setStoredState])

}