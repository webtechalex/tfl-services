import { get } from 'axios'
export const FETCH_DATA_LOADING = 'FETCH_DATA_LOADING'
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'

export const fetchServicesLoading = () => ({
  type: FETCH_DATA_LOADING,
  name: 'services',
  status: 'loading'
})

export const fetchServicesError = () => ({
  type: FETCH_DATA_ERROR,
  name: 'services',
  status: 'error'
})

export const fetchServicesSuccess = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  name: 'services',
  status: 'success',
  payload
})

export const fetchBikesLoading = () => ({
  type: FETCH_DATA_LOADING,
  name: 'bikes',
  status: 'loading'
})

export const fetchBikesError = () => ({
  type: FETCH_DATA_ERROR,
  name: 'bikes',
  status: 'error'
})

export const fetchBikesSuccess = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  name: 'bikes',
  status: 'success',
  payload
})

export const fetchServices = () => dispatch => {
  dispatch(fetchServicesLoading())
  let servicesURL = 'https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true'
  get(servicesURL)
    .then(response => {
      dispatch(fetchServicesSuccess(response.data))
    })
    .catch(error => {
      dispatch(fetchServicesError())
    })
}

export const fetchBikes = (query) => dispatch => {
  console.log('fetching bikes...')
  dispatch(fetchBikesLoading())
  let servicesURL = `https://api.tfl.gov.uk/BikePoint/Search?query=${query}`
  get(servicesURL)
    .then(response => {
      dispatch(fetchBikesSuccess(response.data))
    })
    .catch(error => {
      dispatch(fetchBikesError())
    })
}