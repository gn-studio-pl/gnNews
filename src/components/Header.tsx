import React from 'react';
import { Button, Navbar, NavbarBrand } from 'reactstrap';
import { AiOutlineAppstore, AiOutlineBars } from 'react-icons/ai';

function Header() {
  const reduxFunctionality = false;
  return (
    <Navbar sticky="top" className="fw-bold d-flex bg-primary">
      <NavbarBrand className="d-flex justify-content-between text-white fs-2 p-0" href="/">
        gnNews
      </NavbarBrand>
      <div className="w-50 d-flex justify-content-end ">
        <button className="border-0 bg-transparent">
          {reduxFunctionality ? (
            <AiOutlineBars className="bg-transparent text-white" style={{ height: 35, width: 35 }} />
          ) : (
            <AiOutlineAppstore className="bg-transparent text-white" style={{ height: 35, width: 35 }} />
          )}
        </button>
        {/* <Button color="primary" outline className="p-2 me-2">
            Change content
          </Button> */}
        <Button outline color="light" className="p-2 me-2">
          PopUp
        </Button>
        <Button outline color="light" className="p-2">
          Choose Language
        </Button>
      </div>
    </Navbar>
  );
}

export default Header;
