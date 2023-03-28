import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Link, Button } from '@material-ui/core';
import { ViewList as ViewListIcon, ViewModule as ViewModuleIcon, Info } from '@material-ui/icons';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import HeaderDialog from '../HeaderDialog';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../reducers';
import { toggleList } from '../../actions';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const isList = useSelector((state: AppState) => state.toggleList);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.MouseEvent<HTMLElement>, value: string | null) => {
    if (value === 'list') {
      dispatch(toggleList(true));
    } else {
      dispatch(toggleList(false));
    }
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component={Link} href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          {title}
        </Typography>
        <ToggleButtonGroup orientation="horizontal" exclusive value={isList ? 'list' : 'module'} onChange={handleChange} style={{ marginLeft: 'auto', backgroundColor: 'white' }}>
          <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="module" aria-label="module">
            <ViewModuleIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <Button onClick={handleOpen}>
          <Info />
        </Button>
        <HeaderDialog isOpen={open} onClose={handleClose} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
