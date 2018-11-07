import React from 'react'
import { connect } from 'react-redux'
import { fetchBikes } from '../../redux/actions'
import BikePoints from '../../components/BikePoints/BikePoints'

const mapStateToProps = state => ({
  bikes: state.bikes.data
})

export default connect(mapStateToProps, { fetchBikes })(BikePoints)