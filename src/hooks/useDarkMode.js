import  useLocalStorage  from "./useLocalStorage"

 const useDarkMode=()=>{
    const [enabled, setEnabled]=useLocalStorage("enabled")

    return [enabled,setEnabled]
}
export default useDarkMode;