import axiosWithAuth from './../utils/axiosWithAuth';

const articleService = ()=> {
    return axiosWithAuth()
        .get('/articles')
        .then(res=> {
            return (res.data);
        })
}

export default articleService;