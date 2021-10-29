import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';
import Article from './Article';


const article = {
    id: "12312",
    createdOn: Date.now(),
    headline: "this headline",
    author: "this author",
    summary: "this summary",
    body: "this body"
}

const articleNoAuthor = {
    id: "12312",
    createdOn: Date.now(),
    headline: "this headline",
    summary: "this summary",
    body: "this body"
}

test('renders component without errors', ()=> {
    render(<Article article={article}/>);
});

test('renders headline, author and article passed in through props', ()=> {
    render(<Article article={article}/>);
    const headline = screen.getByText(/this headline/i);
    expect(headline).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={articleNoAuthor}/>);
    const headline = screen.getByText(/Associated Press/i);
    expect(headline).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const handleDelete = jest.fn();
    render(<Article article={article} handleDelete={handleDelete}/>);
    const button = screen.getByTestId("deleteButton");
    userEvent.click(button);
    expect(handleDelete).toBeCalled();
});

//1. Complete all above tests. Create test article data when needed.