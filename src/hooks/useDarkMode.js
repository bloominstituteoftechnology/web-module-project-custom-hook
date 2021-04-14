import useLocalStorage from './useLocalStorage'

const useDarkMode = (darkOn) => {
    const [someValue, setSomeValue] = useLocalStorage('isdark', darkOn)

    const handleChanges = e =>{
        setSomeValue(
        !someValue)
    }

    // const clearDark = e =>{
    //     e.preventDefault();
    //     setSomeValue(darkOn)
    // }
    return[someValue, handleChanges]
}

export default useDarkMode