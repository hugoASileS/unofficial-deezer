import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  &.active {
    color: black;
  }
`;

const Browse = () => (
  <Nav defaultActiveKey="/" className="flex-column">
    <Nav.Link as={StyledNavLink} to="/" exact>
      Home
    </Nav.Link>
    <Nav.Link as={StyledNavLink} to="/albums" exact>
      Albums
    </Nav.Link>
    <Nav.Link as={StyledNavLink} to="/artists" exact>
      Artistas
    </Nav.Link>
  </Nav>
);

export default Browse;
