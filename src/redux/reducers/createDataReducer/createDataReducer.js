import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, FETCH_DATA_LOADING } from '../../actions'

const createDataReducer = (reducerName) => {
  return (state = null, action) => {
    if (action && action.name !== reducerName) return state

    switch (action && action.type) {
      case FETCH_DATA_LOADING:
        return 'loading'
      case FETCH_DATA_ERROR:
        return 'error'
      case FETCH_DATA_SUCCESS:
        return action.payload
      default:
        return state
    }
  }
}

export default createDataReducer