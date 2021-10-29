# Advanced Web Applications Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **advanced web applications**. During this sprint, you studied **React testing, client-side auth, HTTP methods, and Vercel**.

In your challenge this week, you will demonstrate your mastery of these skills by creating **a login page** and **basic CRUD application.**

This is an individual assessment. All work must be your own. All projects will be submitted to codegrade for automated review. You will also be given feedback by code reviewers the Monday (Wednesday for PT) after challenge submissions. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support by dropping a :wave: in your help channel when needed.

## Introduction

In this project you will create a login page and request a token from the server that you'll use to send all other requests to the server. You will then be able to fetch the article data array, update data, and delete data, and watch the fun happen!

## Instructions

### Task 1: Project Setup

* [ ] Fork and clone this repository.
* [ ] Implement the project with the `<firstName-lastName>` branch, committing changes regularly.
* [ ] Push commits: git push origin `<firstName-lastName>`.
* [ ] **RUN** `npm install` to install your dependencies.
* [ ] **RUN** `npm start` to start your application backend and frontend.
* [ ] **RUN** `npm test` to start your application's test runner.

### Task 2: CodeGrade Setup

* [ ] Open the assignment in Canvas and click on the "Set up git" option.
* [ ] Follow instructions to set up Codegrade's Webhook and Deploy Key, making sure your deployment is set to your `<firstName-lastName>`. **Make sure to add in `?branch=<firstname-lastname>` at the end of your webhook payload URL.**
* [ ] Push your first commit: `git commit --allow-empty -m "first commit" && git push`
* [ ] Check to see that Codegrade has accepted your git submission.

### Task 3: Project Requirements

Your finished project must include all of the following requirements.

**See reference materials at the bottom of the this document for API Reference Details.**

#### Login Authentication
> *Build a login form to authenticate your users along with all the components and utilities needed to support authentication.*

* [ ] In `Login.js`, build all UI and state functionality needed to capture a username and password. On a successful login, redirect user to the `View.js` component.
* [ ] **Make sure that the input for your username and password includes the id="username" and id="password" attributes. Codegrade autotests will fail without them.**
* [ ] **Make sure that the submit button to your login form includes the id="submit" attribute.**
* [ ] In `Login.js`, add a p tag that will hold an error state if occurs. Add in all state functionality needed to support error display.
* [ ] **Make sure your error p tag has an id="error" attribute attached. Codegrade autotests will fail without them.**
* [ ] Construct an http request that retrieves an auth token from the server when the username `Lambda` and the password `School` is passed into the request. Complete successful login auth flow and redirect to `View.js.`
* [ ] Display an appropriate error message when login is not successful.

#### Route Authentication
> *Build the needed utilities to restrict access to private routes.*
* [ ] Build a `PrivateRoute` component within the components folder.
* [ ] Use the `PrivateRoute` component to build a route rendering `View.js` to the path `/view`.
* [ ] Use the `PrivateRoute` component to build a route rendering `Logout.js` to the path `/logout`.

#### Request Authentication
> *Complete the requests needed to execute all CRUD functions.*
* [ ] Build a `axiosWithAuth` module within the utils folder to create an instance of axios with the authentication header.
* [ ] Complete the `services/articleService.js` module. It should make an authenticated call to retrieve and return all articles from the server.

* [ ] In `View.js`, when the component mounts, use `articleService` to make an http request and add all articles to state.

* [ ] In `View.js`, complete `handleDelete` so that a http request is made that deletes the article with the included id. After successfully deleting the article on the api, update local state to reflect these changes.

* [ ] In `EditForm.js`, make a http request to get the article with the id `editId`. Save the result in state.

* [ ] In `View.js`, complete `handleEdit` so that a http request is made that updates the passed in article. Set the editing state to false when the request is complete. After successfully deleting the article on the api, update local state to reflect these changes.


#### Logout Authentication
> *Add in the http requests needed to logout of the application.*

* [ ] In `Logout.js`, execute a http request to logout on mount. When the request is complete, the user's security token should be removed and the browser should redirect to the login page.

#### Advanced Testing
> *Add the following tests within Article.test.js.*
* [ ] Build a test that shows the `Article` component, given the correct props, can render without errors.
* [ ] Build a test that shows that when a correctly formatted article is passed into the `Article` component, the correct headline, author, summary and body are displayed.
* [ ] The `Article` component should display "Associated Press" when an author attribute is not avalible. Build a test that verifies that that is true.
* [ ] Build a test that show that when the deleteButton is pressed on an Article, the handleDelete functional property is executed.

> *Add the following tests within View.test.js.*
* [ ] Build a test that shows the `View` component can render zero articles without errors. Make sure the mock service called made when View mounts.
* [ ] Build a test that shows the `View` component can render three articles without errors. Make sure the mock service called made when View mounts.

**Notes:**
* You are welcome to create additional files but **do not move or rename existing files** or folders.
* Do not change your `package.json` file except to install additional libraries.
* In your solution, it is essential that you follow best practices and produce clean and professional results.
* Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.
* It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Reference Materials

#### API Documentation
* **[POST]** * to `http://localhost:5000/api/login`: returns a the current authenication information of the user. Pass in the following credentials as the `body` of the request: `{ username: 'Lambda', password: 'School' }` for a successful login.

* **[POST]** * to `http://localhost:5000/api/logout`: returns the expired authentication information of the user.

* **[GET]** to `http://localhost:5000/api/articles`: returns the all posts currently available. **This endpoint can only be accessed by an authenticated user.**

* **[POST]** to `http://localhost:5000/api/articles`: creates a article object. Returns all available articles. Pass the article as the `body` of the request. **This endpoint can only be accessed by an authenticated user.**

* **[PUT]** to `http://localhost:5000/api/articles/:id`: updates the article using the `id` passed as part of the URL. Returns all available articles. Send the updated article object as the `body` of the request. **This endpoint can only be accessed by an authenticated user.**

* **[DELETE]** to `http://localhost:5000/api/articles/:id`: removes the article with the `id` referenced. Returns all available articles. **This endpoint can only be accessed by an authenticated user.**

#### Article Data Structure
```
{
    id: 'aMqwd', //unique article id
    headline: "headline", //title of article
    createdOn: '2021-08-09T18:02:38-04:00 
', //timestamp of when article was added
    summary: "summary", //short summary statement of article
      body: ""  //paragraph of article text
}
```

## Submission format
* [ ] Submit via Codegrade by commiting and pushing any new changes.
* [ ] Check codegrade for automated feedback.
* [ ] Check codegrade on Monday following the Sprint Challenge for reviewer feedback. For more information on how to access and read your feedback, check [here](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)
* [ ] Any changes pushed to your <firstName-lastName> branch will resubmited to codegrade if pushed before the sprint challenge deadline. Changes after the deadline will not be reviewed.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Add your answers to the questions within `interview_answers.md` file. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. Explain what a token is used for.
2. What steps can you take in your web apps to keep your data secure?
3. Describe how web servers work.
4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
