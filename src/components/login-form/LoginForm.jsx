import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./LoginForm.css";

export class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleSubmit = (event, email) => {
        localStorage.setItem('user', email);
    }

    handleChange = (name,  event) => {
        this.setState({
            [name]: event.target.value
        });
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={(e) => this.handleSubmit(e, this.state.email)}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.email}
                            onChange={(e) => this.handleChange('email', e)}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={(e) => this.handleChange('password', e)}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
          </Button>
                </form>
            </div>
        );
    }
}