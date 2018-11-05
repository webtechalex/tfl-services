import React, { Component } from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import ServiceStatusContainer from '../ServiceStatusContainer/ServiceStatusContainer'

import { fetchServices } from '../../redux/actions'
import getServiceStatus from '../../redux/selectors/getServiceStatus'
import './App.css'
import ServicesMenu from "../../components/ServicesMenu/ServicesMenu"

class App extends Component {
  state = {
    menuAnchor: null,
    selected: ''
  }

  componentDidMount() {
    this.props.fetchServices()
  }

  handleButtonClick = event => {
    this.setState({ menuAnchor: event.currentTarget })
  }

  handleMenuClick = line => {
    this.setState({ selected: line })
    this.handleClose()
  }

  handleClose = () => {
    this.setState({ menuAnchor: null })
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Typography variant='h2'>TfL Services</Typography>
          <ServicesMenu
            services={this.props.services}
            menuAnchor={this.state.menuAnchor}
            handleButtonClick={this.handleButtonClick}
            handleMenuClick={this.handleMenuClick}
            handleClose={this.handleClose}
          />
          <ServiceStatusContainer lineName={this.state.selected}/>
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  services: getServiceStatus(state.services)
})

export default connect(mapStateToProps, { fetchServices })(App)
