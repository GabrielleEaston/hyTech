import React from 'react'
import Nav from './Nav'
import { Container } from "react-bootstrap";
const Layout = (props) => (
  <Container>
    <Nav user={props.user} />

    <div className="layout-children">
      {props.children}
    </div>

  </Container>
)

export default Layout