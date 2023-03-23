import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';

function App() {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div>
      <Header />
      <div>
        <Button color="primary" onClick={() => setToggle(!toggle)}>
          Open
        </Button>
        <Offcanvas isOpen={toggle} toggle={() => setToggle(!toggle)}>
          <OffcanvasHeader toggle={() => setToggle(!toggle)}>Offcanvas</OffcanvasHeader>
          <OffcanvasBody>
            <strong>This is the Offcanvas body.</strong>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </div>
  );
}

export default App;
