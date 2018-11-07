import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Disruptions = ({disruptions}) => (
  <List>
    {disruptions.map((item, index) => (
      <ListItem key={index}>
        <ListItemText primary={item.reason} />
      </ListItem>
    ))}
  </List>
)

export default Disruptions