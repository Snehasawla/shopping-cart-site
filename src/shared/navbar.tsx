import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
Navbar as ReactNavbar,
NavbarToggler,
Nav,
NavItem,
NavLink,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem,
NavbarText, 
NavbarBrand} from 'reactstrap';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle =() => setIsOpen(!isOpen);
    return (
        <div>
            <ReactNavbar color='light' light expand='md'>
                <NavbarBrand href='/'>reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            <NavLink className='active' tag={Link} to='/'>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to ='/'>
                                ALL Products
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to ='/'>
                                Pricing
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to ='/'>
                                About
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavLink tag={Link} to='/auth'>
                        Login
                    </NavLink>
                    <NavbarText>Shop</NavbarText>
                </Collapse>
            </ReactNavbar>
        </div>
    );
};


export default Navbar;
