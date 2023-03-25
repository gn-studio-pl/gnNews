import React from 'react';
import { Button, Navbar, NavbarBrand } from 'reactstrap';
import { AiOutlineAppstore, AiOutlineBars } from 'react-icons/ai';

function Header() {
  const reduxFunctionality = false;
  return (
    <div className="">
      <Navbar className="fw-bold d-flex border-bottom border-primary" color="light">
        <NavbarBrand className="d-flex justify-content-between text-primary fs-2" href="/">
          gnNews
        </NavbarBrand>
        <div className="w-50 d-flex justify-content-end ">
          <button className="border-0 bg-light">
            {reduxFunctionality ? (
              <AiOutlineBars style={{ height: 35, width: 35 }} />
            ) : (
              <AiOutlineAppstore style={{ height: 35, width: 35 }} />
            )}
          </button>
          {/* <Button color="primary" outline className="p-2 me-2">
            Change content
          </Button> */}
          <Button outline color="primary" className="p-2 me-2">
            PopUp
          </Button>
          <Button outline color="primary" className="p-2">
            Choose Language
          </Button>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
