import React from 'react'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const BikePointsList = ({bikePoints}) => {
  if (bikePoints.length) {
    return (
      <List>
        {bikePoints.map(item => (
          <ListItem>
            <ListItemText primary={`${item.id.split('_')[1]} ${item.commonName} (${item.lat}, ${item.lon})`} />
          </ListItem>
        ))}
      </List>
    )
  }
  return null
}

export default BikePointsList