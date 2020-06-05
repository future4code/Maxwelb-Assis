import React, { useState } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="info" light expand="md">
        <NavbarBrand href="/">Max Planner</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Header;
