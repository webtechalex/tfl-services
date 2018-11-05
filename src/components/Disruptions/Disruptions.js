import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Disruptions = ({disruptions}) => (
  <List>
    {disruptions.map(item => (
      <ListItem>
        <ListItemText primary={item} />
      </ListItem>
    ))}
  </List>
)

export default Disruptions