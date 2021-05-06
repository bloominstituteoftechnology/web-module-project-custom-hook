import useLocalStorage from './useLocalStorage';

let darkMode = useLocalStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".dark-mode__toggle");

const useDarkMode = () => {
    document.body.classList.add("darkmode");
    useLocalStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    useLocalStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
    useDarkMode();
}

darkModeToggle.addEventListenter("click", () => {
    darkMode = useLocalStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        useDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode);
    };
});

export default { useDarkMode, darkMode };














// import { useState, useEffect } from 'react';
// import useLocalStorage from './useLocalStorage';

// const useDarkMode = () => {
//     const [enabled, setEnabled] = useLocalStorage("dark-mode-enabled");

//     const yesDarkMode = userLikesDarkMode();

//     const enabledState =
//         typeof enabled !== "undefined" ? enabled : yesDarkMode;

//     useEffect(() => {
//         const className = "dark-mode";
//         const element = window.document.body;
//         if (enabled) {
//             element.classList.add(className);
//         } else {
//             element.classList.remove(className);
//         }
//     }, [enabled]
//     );
//     return [enabledState, setEnabled];
// }