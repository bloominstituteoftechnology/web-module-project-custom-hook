Objective 1 - define stateful logic
Overview
Stateful logic is logic that is built into a component. It can be a function that handles a click event or maybe a function that sets toggle state, or even a function that formats data before it gets displayed. Usually, this kind of logic deals with state in the component. Thus the moniker "stateful logic."

Follow Along
Look at this component. Can you spot the stateful logic built into it?

import React, { useState } from "react";

const DynamicTitle = () => {
  const [title, setTitle] = useState("Hooks are so fun!");
  const [inputText, setInputText] = useState("");

  const handleChanges = e => {
    setInputText(e.target.value);
  };

  const changeTitle = e => {
    e.preventDefault();
    setTitle(inputText);
    setInputText("");
  };

  return (
    <div className="Wrapper">
      <h1 className="Title">{title}</h1>
      <form onSubmit={changeTitle}>
        <div className="Input">
          <input
            className="Input-text"
            id="input"
            name="inputText"
            onChange={handleChanges}
            placeholder="Create new title"
            type="text"
            value={inputText}
          />
          <label htmlFor="input" className="Input-label">
            New title
          </label>
        </div>
      </form>
    </div>
  );
};

export default DynamicTitle;
You are probably looking at the two functions - handleChanges and changeTitle. If so, that is correct! And we can probably also count the title and inputText state in there as well. Those are all great examples of stateful logic. And really, the sky's the limit on what could be considered stateful logic in a React component.

Objective 2 - apply non-visual behavior (stateful logic) with custom hooks
Overview
Custom Hooks, are so-called because you are building the hook yourself (customizing it), to apply non-visual behavior and stateful logic throughout your components. This way, you can reuse the same hook over and over again. Custom hooks follow the same patterns of naming that you've already learned (i.e. prefacing the function name with use, as in useState). You can build a reusable custom hook for anything from handling controlled inputs, to managing event listeners, or watching for key presses.

Follow Along
Let's start with the same component that we evaluated in the objective above. Go ahead and look over it one more time, this time making sure to understand what the various parts are doing.

import React, { useState } from "react";

const DynamicTitle = () => {
  const [title, setTitle] = useState("This is a class component");
  const [inputText, setInputText] = useState("");

  const handleChanges = e => {
    setInputText(e.target.value);
  };

  const changeTitle = e => {
    e.preventDefault();
    setTitle(inputText);
    setInputText("");
  };

  return (
    <div className="Wrapper">
      <h1 className="Title">{title}</h1>
      <form onSubmit={changeTitle}>
        <div className="Input">
          <input
            className="Input-text"
            id="input"
            name="inputText"
            onChange={handleChanges}
            placeholder="Create new title"
            type="text"
            value={inputText}
          />
          <label htmlFor="input" className="Input-label">
            New title
          </label>
        </div>
      </form>
    </div>
  );
};

export default DynamicTitle;
See how we have a useState hook, a handleChange function to update based on any changes, and a changeTitle function to change the actual title of the component when we submit the form?

Now, what happens if we need to issue state for multiple input tags? If we were to follow the lead of the patterns shown above, we would end up having to rewrite large amounts of our code for each useState call that we've invoked in order to create state for our second, third, and fourth inputs.

Instead, let's build out our custom hook that to reuse stateful logic. In this way, we avoid repeating code unnecessarily. Read the following function and try to guess what each piece of code is doing:

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChanges = updatedValue => {
    setValue(updatedValue);
  };
  return [value, setValue, handleChanges];
};
In this useInput custom hook function, we're taking in an initialValue and returning three new values. We pass initialValue as a parameter on the function. initialValue is then passed into the useState hook, which returns an array with our value variable and setValue function (just the same as what you've used up to this point).

Next, we have a handleChanges function that uses the setValue function to update state to a new value. Finally, we return an array from our useInput custom hook containing the value variable, the setValue function, and the handleChanges function.

Let's take a look at this custom hook when it's imported and used in a component.

import React, { useState } from "react";
import { useInput } from "./useInput.js";


const CustomForm = () => {
  const [username, setUsername, handleUsername] = useInput("");
  const [password, setPassword, handlePassword] = useInput("");
  const [email, setEmail, handleEmail] = useInput("");

  const handleSubmit = e => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="username-text"
        id="username"
        name="username"
        onChange={e => handleUsername(e.target.value)}
        placeholder="Username"
        type="text"
        value={username}
      />
      <input
        className="password-test"
        id="password"
        name="password"
        onChange={e => handlePassword(e.target.value)}
        placeholder="Password"
        type="password"
        value={password}
      />
      <input
        className="email-text"
        id="email"
        name="email"
        onChange={e => handleEmail(e.target.value)}
        placeholder="Email"
        type="text"
        value={email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomForm;
Whoa. That looks crazy, right? Don't worry. We're going to dissect this whole script to figure out exactly what each part is doing.

First off, notice that we're invoking the useInput custom hook three times at the top of the component and passing in an empty string as each one's initial value:

const [username, setUsername, handleUsername] = useInput("");
const [password, setPassword, handlePassword] = useInput("");
const [email, setEmail, handleEmail] = useInput("");
Our useInput hook returns a new copy of our custom hook and state each time. Also, because array destructuring is based on positioning and not the name, we are allowed by JavaScript to name each of the three items returned from useInput in different ways. This is why we can set the first item to username, the second to setUsername, and the third to handleUsername while the next two useInput calls return differently-named variables and functions.

From these invocations, it now becomes easy to rig up each of our input tags in our JSX just the same as we did before. Here they are again for your reference:

<form onSubmit={resetValues}>
  <input
    className="username-text"
    id = "username";
    name = "username";
    onChange={e => handleUsername(e.target.value)}
    placeholder = "Username";
    type = "text";
    value={username}
  />
  <input
    className="password-test"
    id = "password";
    name = "password";
    onChange={e => handlePassword(e.target.value)}
    placeholder = "Password";
    type = "password";
    value={password}
  />
  <input
    className="email-text"
    id = "email";
    name = "email";
    onChange={e => handleEmail(e.target.value)}
    placeholder = "Email";
    type = "text";
    value={email}
  />
  <button type="submit">Submit</button>
</form>
Notice how we are setting our handleUsername, handlePassword, and handleEmail functions to process changes to the input. Remember how we returned a handleChanges function from our custom hook? Well, we've renamed them here (again, thanks to array destructuring) and are using them just the same as before. However, now, we have less code for them in our component.

The final thing you should notice is the resetValue function. When we invoke it, we use the setValues returned from each useInput (again, each one is named differently) and pass it in our reset value (in this case, an empty string). Isn't this an easy way to change your state?

Here they are again for your reference:

const resetValues = e => {
  e.preventDefault();
  setUsername("");
  setPassword("");
  setEmail("");
};
By building out a custom hook, we can skip writing out all of the stateful logic for our non-visual behavior. Custom hooks produce beautiful, DRY code that is easy to read and use. You have built a reusable piece of code that makes it easy for you to import anywhere in your application and build out stateful logic in any of your components.


Objective 3 - compose hooks in a custom hook to extend multiple pieces of stateful logic
Overview
Just as we can compose functions in vanilla JavaScript and components in React to create new functionality, we can extend our stateful logic by combining several hooks in a powerful, single custom hook. This compositional ability allows us to build out interesting abilities by combining various hooks in our application.

We can develop this complexity using multiple hooks inside a single custom hook. We've done this already when we called useState inside useInput. Pretty cool! Now imagine writing several custom hooks and combining all of that logic into a single custom hook to use in your components. The possibilities are dizzying! And amazing! Let's try it out by expanding the useInput custom hook we've already built.

Follow Along
We need to start by building out a second custom hook. Later on, we'll combine it with the useInput custom hook from the previous objective to achieve a more compelling hook with multiple pieces of stateful logic.

First, we'll implement the new hook that we will call useLocalStorage:

import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
Let's walk through what we're doing here. First, we pass in a key-value (like: "input1," "input2" ) and an initialValue. These two parameters (key and value) are used in the useState hook call and used immediately inside our custom hooks. Instead of just passing in an initial value to this useState hook, we are using an anonymous arrow function as a callback to do two things:

Check if the window.localStorage has a specific item (retrieved by key) in it
Return that item from local storage if it exists or the initialValue otherwise
Because of this, our hook can now successfully check to see if a specific state item exists in localStorage, and it can use that item if it exists instead of the provided initialValue. Then, we also have a setValue function that takes a value as a parameter, sets it to the current storedValue by using the setStoredValue provided by useState, and sets it localStorage. As our state is now stored, our custom hook will check here on refresh to see if the state exists.

Now that we have a custom hook for controlling value placement (and updates) in localStorage, we can combine it with useInput to create powerful logic. Take a look at the completed code, and then we'll talk about what it's doing:

import { useState } from "react";

export const useInput = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);
  const handleChanges = updatedValue => {
    setValue(updatedValue);
  };
  return [value, setValue, handleChanges];
};

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
While our useLocalStorage hook has stayed the same, our useInput custom hook has some nice upgrades going on. Instead of implementing useState from React as before, we're now using useLocalStorage. Furthermore, we're also taking in two parameters instead of one - key and initialValue. These are then passed directly into the useLocalStorage hook. Immediately, the hook sets about implementing special logic with the variables as described above. This returns to our useInput custom hook with either a value from localStorage or our initialValue, and our useInput custom hook then returns a value, setValue function, and a handleChanges function in an array just the same as it did before.

Now when we call the useInput hook in a component to control inputs dynamically, we just need to pass in a unique key for each input to keep track of it in localStorage. Something like this:

const [username, setUsername, handleUsername] = useInput("userName", "");
const [password, setPassword, handlePassword] = useInput("password", "");
const [email, setEmail, handleEmail] = useInput("email", "");
Although this isn't something you will often do (storing input values in localStorage), this setup is quite powerful, and it effectively demonstrates how composable hooks can be; by combining the stateful logic of multiple custom hooks, you can compose a really nice custom hook with advanced stateful logic.

One final thing to note is that we can employ the useLocalStorage custom hook in other places now as well. So, not only do we have an extra-powerful useInput created by composing multiple hooks together, we also have another custom hook available to us anytime we want to persist data in localStorage.