import React, { Component } from 'react'
//import './SignUp.css'
import { signUp, signIn } from '../services/user';
import { Form, Container, Button } from "react-bootstrap";

class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            isError: false,
            errorMsg: ''
        }
    }

    handleChange = event =>
        this.setState({
            [event.target.name]: event.target.value,
            isError: false,
            errorMsg: ''
        })

    onSignUp = event => {
        event.preventDefault()

        const { history, setUser } = this.props

        signUp(this.state)
            .then(() => signIn(this.state))
            .then(res => setUser(res.user))
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                this.setState({
                    email: '',
                    password: '',
                    passwordConfirmation: '',
                    isError: true,
                    errorMsg: 'Sign Up Details Invalid'
                })
            })
    }

    renderError = () => {
        const toggleForm = this.state.isError ? 'danger' : ''
        if (this.state.isError) {
            return (
                <Button variant="primary" type="submit" className={toggleForm}>
                    {this.state.errorMsg}
                </Button>
            )
        } else {
            return <Button variant="primary" type="submit">Sign Up</Button>
        }
    }

    render() {
        const { email, username, password, passwordConfirmation } = this.state

        return (
            <Container>
                <h3>Sign Up</h3>
            <Form onSubmit={this.onSignUp}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Enter username"
                        onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={this.handleChange}
              />
              </Form.Group>
              <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              
                    <Form.Control
                        required
                        name="password"
                        value={password}
                        type="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                        required
                        name="passwordConfirmation"
                        value={passwordConfirmation}
                        type="password"
                        placeholder="Confirm Password"
                        onChange={this.handleChange}
                />
                </Form.Group>
                    {this.renderError()}
                </Form>
            </Container>
        )
    }
}

export default SignUp