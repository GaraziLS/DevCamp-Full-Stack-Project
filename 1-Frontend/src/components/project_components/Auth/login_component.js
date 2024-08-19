import React, { Component } from 'react';
import axios from "axios"

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errorText: ''
        };

        // Bindings

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    // Handlers

    handleLoginChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        this.setState({
            errorText: ""
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:5000/login', {
            user_name: this.state.username,
            user_password: this.state.password
        }, { withCredentials: true })
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    this.props.handleSuccessfulLoginAuth();
                }
            })
            .catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    if (error.response.status === 401) {
                        this.setState({
                            errorText: "Wrong username or password"
                        });
                    } else {
                        this.setState({
                            errorText: "An error occurred. Please try again later."
                        });
                    }
                } else if (error.request) {
                    // The request was made but no response was received
                    this.setState({
                        errorText: "No response from the server. Please check your connection and try again."
                    });
                } else {
                    // Something happened in setting up the request that triggered an Error
                    this.setState({
                        errorText: "An error occurred while setting up the request. Please try again."
                    });
                }
                this.props.handleUnsuccessfulLoginAuth();
            });
    }

    render() {
        return (
            <div>
                <h2>Log in</h2>
                <div>{this.state.errorText}</div>

                <form onSubmit={this.handleSubmit}>
                    <input
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
                    <button type='submit'>Log in</button>
                </form>

            </div>
        );
    }
}