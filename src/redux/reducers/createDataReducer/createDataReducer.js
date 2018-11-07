import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, FETCH_DATA_LOADING } from '../../actions'

const createDataReducer = (reducerName) => {
  return (state = {
    isLoading: false,
    hasError: false,
    data: []
  }, action) => {
    if (action && action.name !== reducerName) return state

    switch (action && action.type) {
      case FETCH_DATA_LOADING:
        return Object.assign({}, state, {
          isLoading: true
        })
      case FETCH_DATA_ERROR:
        return Object.assign({}, state, {
          hasError: true
        })
      case FETCH_DATA_SUCCESS:
        return Object.assign({}, {
          isLoading: false,
          hasError: false,
          data: action.payload
        })
      default:
        return state
    }
  }
}

export default createDataReducer