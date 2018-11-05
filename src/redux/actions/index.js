export const FETCH_DATA_LOADING = 'FETCH_DATA_LOADING'
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'

export const fetchServicesLoading = (isLoading) => ({
  type: FETCH_DATA_LOADING,
  name: 'services'
})

export const fetchServicesError = (hasError) => ({
  type: FETCH_DATA_ERROR,
  name: 'services'
})

export const fetchServicesSuccess = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  name: 'services',
  payload
})

export const fetchBikesLoading = (isLoading) => ({
  type: FETCH_DATA_LOADING,
  name: 'bikes'
})

export const fetchBikesError = (hasError) => ({
  type: FETCH_DATA_ERROR,
  name: 'bikes'
})

export const fetchBikesSuccess = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  name: 'bikes',
  payload
})