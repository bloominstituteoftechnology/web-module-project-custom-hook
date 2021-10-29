import { server } from './src/mocks/server'
import { resetArticles } from './src/mocks/data'
import { BrowserRouter as Router, Route} from "react-router-dom";

import MutationObserver from 'mutationobserver-shim';

import React from 'react'

import App from './src/components/App'
import Login from './src/components/Login';
import View from './src/components/View';

import { render, screen, waitFor, within} from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom/extend-expect'

beforeAll(() => { server.listen() })
afterAll(() => { server.close() })
beforeEach(() => {
  resetArticles()
})
afterEach(() => {
  server.resetHandlers()
  document.body.innerHTML = ''
})

test('Is the latest version of the project', () => {
  const pjson = require('./package.json')
  expect(pjson.version).toBe('0.0.1')
});


const cred = {
  username: "Lambda",
  password: "School"
}

describe("Login Authentication", ()=> {
  test("App does nothing when login incorrect username", async ()=>{
    render(<Router>
      <Route><Login/></Route>
    </Router>);

    const nameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");
  
    userEvent.clear(nameInput);
    userEvent.type(nameInput, "wrong");
    let wait = await screen.findAllByRole("button");

    userEvent.clear(passwordInput);
    userEvent.type(passwordInput, cred.password);
    wait = await screen.findAllByRole("button");

    const button = document.querySelector("#submit");
    userEvent.click(button);
    wait = await screen.findAllByRole("button");
    
    await waitFor(()=> {
      const error = document.querySelector("#error");
      expect(error.textContent).toBeTruthy();
    });
  });

  test("App does nothing when login incorrect password", async ()=>{
    render(<Router>
      <Route><Login/></Route>
    </Router>);

    const nameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");
  
    userEvent.clear(nameInput);
    userEvent.type(nameInput, cred.username);
    let wait = await screen.findAllByRole("button");

    userEvent.clear(passwordInput);
    userEvent.type(passwordInput, "wrong");
    wait = await screen.findAllByRole("button");

    const button = document.querySelector("#submit");
    userEvent.click(button);
    wait = await screen.findAllByRole("button");
    
    await waitFor(()=> {
      const error = document.querySelector("#error");
      expect(error.textContent).toBeTruthy();
    });
  });

  test("App Successfully redirects", async ()=>{
    render(<Router><App/></Router>);
    const nameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");
  
    userEvent.clear(nameInput);
    userEvent.type(nameInput, cred.username);
    let wait = await screen.findAllByRole("button");

    userEvent.clear(passwordInput);
    userEvent.type(passwordInput, cred.password);
    wait = await screen.findAllByRole("button");

    const button = document.querySelector("#submit");
    userEvent.click(button);
    wait = await screen.findAllByRole("button");
    wait = await screen.findAllByRole("button");
    
    await waitFor(()=> {
      const title = screen.getByText('View Articles');
      expect(title).toBeInTheDocument();
    });
  });  
})

describe("View Page", ()=> {
  test("Loads all articles on initial rendering", async ()=>{
    localStorage.setItem("token", "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98")
    render(<Router><View/></Router>);
    const articles = await screen.findAllByTestId("article");
    expect(articles).toHaveLength(4);
  });

  test("Successfully deletes an article", async ()=>{
    localStorage.setItem("token", "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98")
    
    render(<Router><View/></Router>);
    const deleteButtons = await screen.findAllByTestId('deleteButton');
    userEvent.click(deleteButtons[0]);

    await waitFor(async ()=> {
      const articles = await screen.findAllByTestId("article");
      expect(articles).toHaveLength(3);
    });
  });

  test("Successfully edits an article", async ()=>{
    localStorage.setItem("token", "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98")
    render(<Router><View/></Router>);
    const editButtons = await screen.findAllByTestId('editButton');
    userEvent.click(editButtons[0]);
    let wait = await screen.findAllByRole("button");
    wait = await screen.findAllByRole("button");

    const headline = document.querySelector('#headline');
    userEvent.type(headline, '{selectall}{del}');
    wait = await screen.findAllByRole("button");
    userEvent.type(headline, 'Test');
    wait = await screen.findAllByRole("button");
    
    const editButton = document.querySelector('#editButton');
    userEvent.click(editButton);
    wait = await screen.findAllByRole("button");

    await waitFor(async ()=> {
      const articles = await screen.findAllByTestId("article");
      const newHeadline = within(articles[0]).queryByTestId("headline");
      expect(newHeadline)
    });
  });
});