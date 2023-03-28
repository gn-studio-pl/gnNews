import React, { useState } from 'react';

import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
import SideBarArrow from './SideBarArrow';

type Props = {
  toggle: () => void;
  isOpen: boolean;
};
const SideBar = ({ toggle, isOpen }: Props) => {
  return (
    <>
      <SideBarArrow toggle={toggle} />
      <div className={`${isOpen ? '' : 'd-none'}`}>
        <Offcanvas tabIndex={-1} isOpen={isOpen} toggle={toggle}>
          <OffcanvasHeader toggle={toggle}>Offcanvas</OffcanvasHeader>
          <OffcanvasBody>
            <strong>This is the Offcanvas body.</strong>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </>
  );
};

export default SideBar;
