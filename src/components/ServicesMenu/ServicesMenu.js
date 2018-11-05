import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WarningIcon from "@material-ui/icons/Warning";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

class ServicesMenu extends React.Component {
  render() {
    const { menuAnchor } = this.props;

    return (
      <div>
        <Button
          aria-owns={menuAnchor ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.props.handleButtonClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={this.props.handleClose}
          disableAutoFocusItem
        >
          {Array.isArray(this.props.services) && this.props.services.map(line => (
            <MenuItem
              key={line.name}
              onClick={() => this.props.handleMenuClick(line.name)}
            >
              <ListItemText primary={line.name} inset />
              <ListItemText primary={line.isNight ? 'N' : ''} inset />
              <ListItemIcon>
                {line.hasDisruptions
                  ? <CheckCircleIcon />
                  : <WarningIcon />}
              </ListItemIcon>
            </MenuItem>
          ))}
          <MenuItem>
            <ListItemText primary='Cycle Hire' inset />
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

// export default withStyles(styles)(SimpleMenu);
export default ServicesMenu;