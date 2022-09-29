import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const header = () => {
  return (
       <Navbar bg="primary" expand="lg" variant="dark">
      <Container fluid>
              <Navbar.Brand href="/">
                  <Link to='/'> Kyro
                  </Link>      </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                  <Nav className="m-auto">
                       <Form className="d-flex">
            <Form.Control
              type=""
              placeholder=""
              className="me-2"
              aria-label=""
            />
           
          </Form>
                  </Nav>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
                      <Nav.Link href="/MyNotes">
                          <Link to='/MyNotes'> My Profile page</Link> </Nav.Link>
            <NavDropdown title="Sasikumar Lakshmanan" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               Logout
              </NavDropdown.Item>
            </NavDropdown>           
          </Nav>         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default header
