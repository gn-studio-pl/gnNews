import React from 'react';
import { Button, Navbar, NavbarBrand } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineAppstore, AiOutlineBars } from 'react-icons/ai';
import newsFormatSlice from '../store/newsFormat';

function Header() {
  const dispatch = useDispatch();
  const isTile = useSelector((state: any) => state.isTileFormat);

  const changeFormat = () => {
    dispatch(newsFormatSlice.actions.toggle());
  };
  return (
    <div className="p1">
      <a href="/" className="d-flex flex-column align-items-center bg-white text-decoration-none text-dark">
        <img className="mb-2" src={`${process.env.PUBLIC_URL + '/images/logo.png'}`} alt="logo" height={'120px'} />
      </a>
      <Navbar sticky="top" className="fw-bold d-flex bg-white border-bottom border-top">
        <div className="d-flex">
          <button className="border-0 bg-transparent" onClick={changeFormat}>
            {isTile ? (
              <AiOutlineBars className="bg-transparent text-black" style={{ height: 35, width: 35 }} />
            ) : (
              <AiOutlineAppstore className="bg-transparent text-black" style={{ height: 35, width: 35 }} />
            )}
          </button>
          <button color="primary" className="bg-white border-0 p-2 me-2">
            PopUp
          </button>
          <button color="primary" className="bg-white border-0 p-2">
            Choose Language
          </button>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
