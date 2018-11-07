import React, { Fragment } from "react"
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import Disruptions from '../../components/Disruptions/Disruptions'
import getDisruptions from '../../redux/selectors/getDisruptions'

const ServiceStatusContainer = ({disruptions, lineName}) => {
  if (!lineName) return null
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

const mapStateToProps = (state, ownProps) => {
  return {disruptions: getDisruptions(state.services.data, ownProps.lineName)}
}

export default connect(mapStateToProps)(ServiceStatusContainer)