import React from 'react';
import { Button, Form, FormControl, Navbar } from 'react-bootstrap';

const Header = () => (
  <header data-testid="header">
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home" className="mr-auto">
        Unofficial Deezer
      </Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar>
  </header>
);

export default Header;
