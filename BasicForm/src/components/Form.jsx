import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
    }

    handleChange = e => {
        const { name, value } = e.target;
        // console.log(name)
        // console.log(value)
        this.setState({
            [name]: value
        });
    };

    handleSubmit = e => {
        
        // Handle form submission, e.g., send data to server
        alert(`Hello ${this.state.name} , Your Email is ${this.state.email}`)

        console.log(this.state);
        e.preventDefault();
    };

    render() {
        const { name, email, password } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                />
                <button type="submit">Register</button>
            </form>
        );
    }
}

export default Form;
