"use client"

import {Navbar, NavbarBrand, Button} from "@nextui-org/react";

const Nav = () => {
  return(
    <Navbar maxWidth="xl" position="static">
      <NavbarBrand>
        <p className="font-bold text-inherit">CV Builder</p>
      </NavbarBrand>
    </Navbar>
  )
}
export default Nav