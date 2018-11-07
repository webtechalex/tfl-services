import React, { Fragment } from "react"
import { connect } from 'react-redux'
import Disruptions from '../../components/Disruptions/Disruptions'
import getDisruptions from '../../redux/selectors/getDisruptions'

const ServiceStatusContainer = ({disruptions, lineName}) => {
  if (!lineName || lineName === 'cycle') return null
  if (disruptions.length) {
    return (
      <Fragment>
        <h2>Service currently suffering disruptions</h2>
        <Disruptions disruptions={disruptions} />
      </Fragment>
    )
  }
  return (
    <h2>No service disruptions</h2>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {disruptions: getDisruptions(state.services.data, ownProps.lineName)}
}

export default connect(mapStateToProps)(ServiceStatusContainer)