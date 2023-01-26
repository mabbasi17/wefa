import { Button, Menu, MenuItem } from '@mui/material';
import Popover from '@mui/material/Popover';

import React from 'react';
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'
import PopupState from 'material-ui-popup-state';


interface Props {}

function Navbar(props: Props) {
    const { } = props
    return (
    <>
      <PopupState variant="popover" popupId="demo-popup-menu">
  {(popupState) => (
    <React.Fragment>
      <Button variant="contained" {...bindTrigger(popupState)}>
        Dashboard
      </Button>
      <Menu {...bindMenu(popupState)}>
        <MenuItem onClick={popupState.close}>Profile</MenuItem>
        <MenuItem onClick={popupState.close}>My account</MenuItem>
        <MenuItem onClick={popupState.close}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  )}
</PopupState>
        
        </>
    )
}

export default Navbar
