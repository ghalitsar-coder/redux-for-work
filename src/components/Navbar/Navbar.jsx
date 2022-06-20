import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const NavbarComp = () => {
  const [toggleBurger, setToggleBurger] = useState(false);
  return (
    <Navbar color="light" expand="md" light>
      <NavbarBrand href="/">reactstrap</NavbarBrand>
      <NavbarToggler
        className="shadow-none"
        onClick={() => setToggleBurger(!toggleBurger)}
      />
      <Collapse isOpen={toggleBurger} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="https://instagram.com/elfaris.__">Instagram</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/ghalitsar-coder">GitHub</NavLink>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              Options
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>Simple Text</NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComp;
