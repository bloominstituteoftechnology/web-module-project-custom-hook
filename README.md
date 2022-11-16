# Composing Stateful Logic - Dark Mode

This project allows you to practice the concepts and techniques learned in this module and apply them in a concrete project. This module explored Form management in React. You learned what stateful logic is, how to build custom hooks, and how to compose multiple hooks together. In your project you will demonstrate proficiency of these subjects and principles by creating an application using each of these.

## Skills You Will Practice

- Building custom hooks that contain stateful logic
- Building custom hooks that work with the localStorage Web API
- Composing hooks together

## Introduction

In this project you'll take this crypto currency tracker app and build two custom hooks that, when composed together, will allow users to set and persist a dark mode preference.

***Make sure to complete your tasks one at a time and complete test each task before proceding forward.***

## Instructions

### Task 1: Project Set Up

* [ ] Create a forked copy of this project.
* [ ] Clone your OWN version of the repository in your terminal
* [ ] cd into the project base directory `cd web-module-project-custom-hook`
* [ ] Download project dependencies by running `npm install`
* [ ] Start up the app using `npm start`

### Task 2: Project Requirements

#### Build a useDarkMode hook

* [ ] Create a new folder called `hooks.`
* [ ] Create a file called `useDarkMode.js`.
* [ ] Build a hook that ONLY setups a boolean state value. This value governs if dark mode is on or off.
* [ ] Return the slice of state created and the state modification function.
* [ ] Replace the darkMode state definition with useDarkMode in App.js.

#### Build a useLocalStorage hook

* [ ] Create a file called `useLocalStorage.js`.
* [ ] Build a hook called that takes in a key value and an initialValue.
* [ ] Use the code from GP to build the the hook.

#### Compose useLocalStorage around useDarkMode

* [ ] Import useLocalStorage into the useDarkMode hook.
* [ ] Confirm that when clicking the dark mode switch on the ui that the correct value is saved to localStorage.
* [ ] Confirm that dark mode persists when reloading the app.

## Submission Format

- [ ] If this is your first time connecting a submission, authorize your github account within the codegrade assignment.
- [ ] Connect your fork to Codegrade using the "Connect Git" button.
- [ ] Find your newly created fork from the list and push your work to main.
- [ ] Check this video for details: www.youtube.com/watch?v=fC2BO7dI6IQ
