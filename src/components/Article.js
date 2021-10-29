import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Article = (props)=> {
    const {article, handleDelete, handleEditSelect} = props;

    return(<div data-testid="article">
        <ArticleStyle>
            <Container>
                <p>{moment(article.createdOn).format("ddd, MMM Do YYYY")}</p>
                <img src={`https://picsum.photos/id/${article.image}/300/300`}/>
            </Container>
            <Container>
                <h1 data-testid="headline">{article.headline}</h1>
                <p data-testid="author">By {article.author || "Associated Press"}</p>
                <h3 data-testid="summary">{article.summary}</h3>
                <p data-testid="body">{article.body}</p>
            </Container>
        </ArticleStyle>
        
        <ButtonContainer>
            <button className="edit" data-testid="editButton" onClick={()=> {handleEditSelect(article.id)}}>Edit</button>
            <button className="delete" data-testid="deleteButton" onClick={()=> {handleDelete(article.id)}}>Delete</button>                
        </ButtonContainer>
    </div>);
}

export default Article;

const ArticleStyle = styled.div`
    display: flex;
    flex-direction: row;
    background: white;
`

const Container = styled.div`
    padding: 0.5em; 
`

const ButtonContainer = styled.div`
    padding: 1em;
    position: relative;
    top:-30px;
    text-transform: uppercase;
    text-align:right;

    button {
        margin: 0.5em;
        padding:1rem;
        background-color: rgb(87,125,159);
        color: white;
        border: 0px;
        border-radius: 5px;
        font-size: 0.8em;
    }
    
    .delete {
        background-color: #e34b4b;
    }
`