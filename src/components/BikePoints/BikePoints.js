import React, { Fragment } from 'react'
import SearchBikePoints from '../SearchBikePoints/SearchBikePoints'
import BikePointsList from '../BikePointsList/BikePointsList'

class BikePoints extends React.Component {
  state = {
    searchValue: ''
  }

  handleChangeSearch = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  handleSubmitSearch = () => {
    this.props.fetchBikes(this.state.searchValue)
  }

  render() {
    if (this.props.isVisible) {
      return (
        <Fragment>
          <SearchBikePoints
            serchValue={this.state.searchValue}
            handleSubmitSearch={this.handleSubmitSearch}
            handleChangeSearch={this.handleChangeSearch}
          />
          <BikePointsList bikePoints={this.props.bikes}/>
        </Fragment>
      )
    }
    return null
  }
}

export default BikePoints