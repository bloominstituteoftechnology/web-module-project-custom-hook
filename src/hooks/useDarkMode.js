
import  useLocalStorage  from './useLogalStorage';

export default function useDarkMode(key) {
    const[value, setValue] = useLocalStorage(key)
    return (
        [value, setValue]
    )
}

//ALTERNATIVELY
// export const useDarkMode = (key) => {
//     const [value, setValue] = useLocalStorage(key)

//     return([value, setValue])
// }

//GO LOOK at lines 3 and 13 in Index.js