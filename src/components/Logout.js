import React from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from './../utils/axiosWithAuth';

const Logout = () => {
    const { push } = useHistory();

    axiosWithAuth()
        .post('/logout')
        .then(res=>{
            localStorage.removeItem('token');
            push('/');
        });
        
    return(<div></div>);
}

export default Logout;

// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.