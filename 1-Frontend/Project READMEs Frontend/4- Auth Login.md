## Login form auth

## Adding state and more params to the form

Both forms handle state, and change it while the user is typing. We'll add state inside the forms (it will start empty):

```
export default class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }  
} 
```

Now we need to add an event handler to the form:

```
<form onSubmit={}>
```

Inside the curly brackets we're going to pass a function **WITH NO PARENTHESES** to avoid errors:

```
<form onSubmit={this.handleSubmit}>
```

> We'll create the function later.

Now, we'll add more params to each input because we need to keep track of the value, as well as the changes. So our code from above would become this:

**Log in form**

```
<form onSubmit={this.handleSubmit}>
       <input>
           type="text"
           name="username"
           placeholder="Type your username"
           value={this.state.username}
           onChange={this.handleLoginChange}>
       </input>

       <input
           type="password"
           name="password"
           placeholder="Type your password"
           value={this.state.password}
           onChange={this.handleLoginChange}>
       </input>
   </form>
   <button type="submit">Sign up</button>
```

## Change handler

Now we're going to create the handleLoginChange, which will update the state when the user types something in. We'll create that below the constructor. This will allow the user to type content in, otherwise won't be possible.

```
handleLoginChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
```

This code receives an event and sets state. The event.target name is set to distinguish between the state elements, to know which is which (if the user types in the password field the target will be the password, and so on). The [] are used to note that this is an expression and not a string.

> We must bind the handler to the ``this`` keyword in order to call it properly, so we'll type ``this.handleLoginChange = this.handleLoginChange.bind(this);``. We should get this:

```
import React, { Component } from 'react';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };

        this.handleLoginChange = this.handleLoginChange.bind(this);
    }

    handleLoginChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render {...}
```

## Submit handler

Remember the handleSubmit method of the form? We'll work on that now. The handler will be above the Change handler, and we'll bind that as well.

```
this.handleSubmit = this.handleSubmit.bind(this);

handleSubmit(event) {
        event.preventDefault()
    }
```

## Connecting to the API

We need to connect to the backend in order to log in or sign up. To do so, we need axios, so we'll import it.

```
import axios from "axios"
```

We'll add the following lines to the handleSubmit method:

```
axios.post('localhost:5000/login',
        { withCredentials: true }
    ).then(response => {
        console.log('response', response);
    })
```
