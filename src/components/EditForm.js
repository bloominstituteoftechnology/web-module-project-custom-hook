import React, { useState, useEffect } from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';
import styled from 'styled-components';

const initialArticle = {
    id:"",
    headline: "",
    author: "",
    summary: "",
    image: 1,
    body: ""
};

const EditForm = (props)=> {
    const [article, setArticle]  = useState(initialArticle);
    const {handleEdit, handleEditCancel, editId} = props;

    useEffect(()=> {
        axiosWithAuth()
            .get(`/articles/${editId}`)
            .then(res=> {
                setArticle(res.data);
            });
    }, []);

    const handleChange = (e)=> {
        setArticle({
            ...article,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEdit(article);
    }


    const handleCancel = (e) => {
        e.preventDefault();
        handleEditCancel();
    }

    return(<FormContainer onSubmit={handleSubmit}>
        <div>
            <label htmlFor="headline">Headline:</label>
            <input value={article.headline} data-testid="headlineInput" id="headline" name="headline" onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="author">Author:</label>
            <input value={article.author} id="author" name="author" onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="summary">Summary:</label>
            <input value={article.summary} id="summary" name="summary" onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="image">Image:</label>
            <input value={article.image} type="number" id="image" name="image" onChange={handleChange}/>
            <EditImg src={`https://picsum.photos/id/${article.image}/150/150`} alt="formImage"/>
        </div>

        <div>
            <label htmlFor="body">Body:</label>
            <input value={article.body} id="body" name="body" onChange={handleChange}/>
        </div>
        <Button id="editButton">Edit Article</Button>
        <Button onClick={handleCancel}>Cancel</Button>
    </FormContainer>);
}

export default EditForm;

// 1. On mount, make a http request to retrieve the article with the id `editId.`
// 2. Save result of request to local state.


const FormContainer = styled.form`
    padding: 5em;
    background: #e0e0e1;
    border-left: black 2px solid;

    label {
        margin-top: 0.5em;
        margin-bottom: 0.2em;
        display: block;
        text-align: left;
        font-size: 1rem;
    }

    input {
        font-size: 1rem;
        padding: 1rem;
        border: 0px;
    }
    
    div { 
        margin: 0.5em 0;
    }
`

const Button = styled.button`
    margin: 0.5em;
    display: block;
    width: 100%;
    padding:1rem;
    background-color: rgb(87,125,159);
    color: white;
    border: 0px;
    border-radius: 5px;
    font-size: 0.8em;
`

const EditImg = styled.img`
    margin-top: 0.2em;
    width: 100%;
`