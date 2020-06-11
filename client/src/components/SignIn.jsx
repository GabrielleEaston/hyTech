
import React, { Component } from 'react'
//import './SignIn.css'
import { signIn } from '../services/user';
import { Form, Container, Button } from "react-bootstrap";

class SignIn extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
            isError: false,
            errorMsg: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            isError: false,
            errorMsg: ''
        })
    }

    onSignIn = event => {
        event.preventDefault()

        const { history, setUser } = this.props

        signIn(this.state)
            .then(res => {
                setUser(res.user)
            })
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                this.setState({
                    isError: true,
                    errorMsg: 'Invalid Credentials',
                    username: '',
                    password: ''
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
            return <Button variant="primary" type="submit">Sign In</Button>
        }
    }
    
    render() {
        const { username, password } = this.state
        

        return (
            <Container>
                <h3>Sign In</h3>
            <Form onSubmit={this.onSignIn}>
            <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Enter Username"
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
                {this.renderError()}
               
                </Form>
            </Container>
        )
    }
}

export default SignIn