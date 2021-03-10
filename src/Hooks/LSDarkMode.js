import LocalStorage from './LocalStorage'

const LSDarkMode = (initialValues) => {

    const [values, setValues ] = LocalStorage('Darkness', initialValues);

    return [values, setValues];

}

export default LSDarkMode;