import React, {Fragment} from "react"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import WarningIcon from "@material-ui/icons/Warning"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"

const ServicesMenu = ({menuAnchor, services, handleButtonClick, handleMenuClick, handleClose}) => (
  <Fragment>
    <Button
      aria-owns={menuAnchor ? "simple-menu" : undefined}
      aria-haspopup="true"
      onClick={handleButtonClick}
    >
      Open Menu
    </Button>
    <Menu
      id="simple-menu"
      anchorEl={menuAnchor}
      open={Boolean(menuAnchor)}
      onClose={handleClose}
      disableAutoFocusItem
    >
      {Array.isArray(services) && services.map(line => (
        <MenuItem
          key={line.name}
          onClick={() => handleMenuClick(line.name)}
        >
          <ListItemText primary={line.name} inset />
          <ListItemText primary={line.isNight ? 'N' : ''} inset />
          <ListItemIcon>
            {line.hasDisruptions
              ? <WarningIcon />
              : <CheckCircleIcon />}
          </ListItemIcon>
        </MenuItem>
      ))}
      <MenuItem
        key='cycle'
        onClick={() => handleMenuClick('cycle')}
      >
        <ListItemText primary='Cycle Hire' inset />
      </MenuItem>
    </Menu>
  </Fragment>
)

export default ServicesMenu