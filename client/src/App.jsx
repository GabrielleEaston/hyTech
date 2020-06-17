import React, { Component } from 'react'
import './App.css'
import Posts from './components/Posts'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import PostDetail from './components/PostDetail'
import { Route, Switch, Redirect } from 'react-router-dom'
import { verifyUser } from './services/user'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'

import Nav from './components/shared/Nav'
class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
   
    }
   
  }


  async componentDidMount() {
    const user = await verifyUser()
    if (user) {
      this.setState( user )
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render() {
    const { setUser, clearUser } = this
    const { user } = this.state
    
    return (
      <div className="App">
       
        <Nav user={user} />
        <Switch>
          <Route exact path="/posts" render={() => <Posts user={user} />} />
          <Route exact path="/" render={() => <Posts user={user} />} />
          <Route exact path="/sign-up" render={props => <SignUp setUser={setUser} history={props.history} />} />
          <Route exact path="/sign-in" render={props => <SignIn setUser={setUser} history={props.history} />} />
          <Route exact path="/sign-out" render={props => <SignOut user={user} clearUser={clearUser} history={props.history} />} />
          <Route exact path="/posts" render={() => <Posts user={user} />} />
          <Route exact path="/add-post" render={() => user ? <PostCreate user={user} /> : <Redirect to='/add-post' />} />
          <Route exact path="/posts/:id/edit" render={(props) => user ? <PostEdit {...props} user={user} /> : <Redirect to='/' />} />
          <Route exact path="/posts/:id" render={(props) => <PostDetail {...props} history={props.history} user={user} />} />
        </Switch>
       
      </div>
    )
    } 
  }


export default App