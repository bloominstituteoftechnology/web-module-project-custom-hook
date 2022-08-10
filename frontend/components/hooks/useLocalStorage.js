const useLocalStorage = (key, initialValue) => {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue) return savedValue;

    return initialValue;
};

export default useLocalStorage;