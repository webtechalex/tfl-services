import { get } from 'axios'
export const FETCH_DATA_LOADING = 'FETCH_DATA_LOADING'
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'

export const fetchServicesLoading = () => ({
  type: FETCH_DATA_LOADING,
  name: 'services'
})

export const fetchServicesError = () => ({
  type: FETCH_DATA_ERROR,
  name: 'services'
})

export const fetchServicesSuccess = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  name: 'services',
  payload
})

export const fetchBikesLoading = () => ({
  type: FETCH_DATA_LOADING,
  name: 'bikes'
})

export const fetchBikesError = () => ({
  type: FETCH_DATA_ERROR,
  name: 'bikes'
})

export const fetchBikesSuccess = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  name: 'bikes',
  payload
})

export const fetchServices = () => dispatch => {
  dispatch(fetchServicesLoading())
  let servicesURL = 'https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true'
  get(servicesURL)
    .then(response => {
      dispatch(fetchServicesSuccess(response))
    })
    .catch(error => {
      dispatch(fetchServicesError())
    })
}

export const fetchBikes = (query) => dispatch => {
  dispatch(fetchBikesLoading())
  let servicesURL = `https://api.tfl.gov.uk/BikePoint/Search?query=${query}`
  get(servicesURL)
    .then(response => {
      dispatch(fetchBikesSuccess(response))
    })
    .catch(error => {
      dispatch(fetchBikesError())
    })
}