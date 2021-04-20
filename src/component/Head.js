import React  from 'react'
import {NavLink} from 'react-router-dom'
import { Navbar ,Nav ,Button} from 'react-bootstrap';
import styled from 'styled-components'

const NavBar = styled(Navbar)`
    width: 100%;
    margin-top: 2%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const Head = (props) => { 
    return (
    <>
      <NavBar bg="dark" variant="dark">
    <NavBar.Brand href="#">MIT-APP</NavBar.Brand>
    <Nav className="mr-auto">
      <Nav.Link><NavLink to={"/design"} >Design</NavLink></Nav.Link>
      <Nav.Link><NavLink  to={"/block"} >Block</NavLink></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#">Download</Nav.Link>
      <Button variant="outline-info">Build</Button>
    </Nav>
  </NavBar>
  <br />
    </>
    )
  }
  
export default Head