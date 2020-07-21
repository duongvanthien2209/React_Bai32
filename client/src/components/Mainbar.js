import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Badge
} from 'reactstrap';

import CartContext from '../contexts/CartContext';

export default function Mainbar(props) {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        {/* <NavLink href="/components/">Components</NavLink> */}
                        <Link className="nav-link" to="/home">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/products">Products</Link>
                    </NavItem>
                    <CartContext.Consumer>
                        {
                            ({ products }) => {
                                return (
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Cart
                                            <Badge color="primary">{products.length}</Badge>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            {
                                                products.map(item => <DropdownItem>{item.name}</DropdownItem>)
                                            }
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                );
                            }
                        }
                    </CartContext.Consumer>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Cart
                            <span></span>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
            </Navbar>
        </div>
    );
}