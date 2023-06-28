import React from 'react';
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import ebayLogo from '../../assets/ebay-logo.png';

const SearchBar = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>
          <img src={ebayLogo} alt="Ebay Logo" height={60}/>
        </Navbar.Brand>
        <Form className="d-flex justify-content-between align-items-center flex-grow-1">
          <div className="d-flex flex-grow-1">
            <FormControl type="text" placeholder="Search for anything" className="mr-2 flex-grow-1" />
            <Button variant="primary">Search</Button>
          </div>
        </Form>
      </Container>
    </Navbar>
  );
};

export default SearchBar;
