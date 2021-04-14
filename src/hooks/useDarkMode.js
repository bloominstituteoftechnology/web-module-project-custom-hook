import useLocalStorage from './hooks/useLocalStorage'

export  default useLocalStorage = (darkOn) => {
    const [someValue, setSomeValue] = useLocalStorage(darkOn)

    const handleChanges = e =>{
        setSomeValue({
            ...someValue,
            [e.target.name]: e.target.value
        })
    }

    const clearDark = e =>{
        e.preventDefault();
        setValues(darkOn)
    }
    return[]
}