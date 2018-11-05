import React, { Fragment } from "react"
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import Disruptions from '../../components/Disruptions/Disruptions'

const ServiceStatusContainer = ({disruptions, lineName}) => {
  if (lineName) {
    if (disruptions.length) {
      return (
        <Fragment>
          <Typography variant='h2'>Service currently suffering disruptions</Typography>
          <Disruptions disruptions={disruptions} />
        </Fragment>
      )
    }
    return (
      <Typography variant='h2'>No service disruptions</Typography>
    )
  }
  return null
}

const mapStateToProps = (state, ownProps) =>
  ({disruptions: state.length ? state.find(line => line.name === ownProps.lineName).lineStatuses.filter(status => status.statusSeverity < 10) : []})

export default connect(mapStateToProps)(ServiceStatusContainer)