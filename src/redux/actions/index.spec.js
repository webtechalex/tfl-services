import { fetchServicesLoading, fetchServicesError, fetchServicesSuccess, fetchBikesLoading, fetchBikesError, fetchBikesSuccess, FETCH_DATA_LOADING, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from './'


describe('services actions', () => {
  describe('fetchServicesLoading', () => {
    it('returns an object with the expected shape', () => {
      const expected = {
        type: FETCH_DATA_LOADING,
        name: 'services',
        status: 'loading'
      }
      expect(fetchServicesLoading(true)).toEqual(expected)
    })
  })

  describe('fetchServicesError', () => {
    it('returns an object with the expected shape', () => {
      const expected = {
        type: FETCH_DATA_ERROR,
        name: 'services',
        status: 'error'
      }
      expect(fetchServicesError(true)).toEqual(expected)
    })
  })

  describe('fetchServicesError', () => {
    it('returns an object with the expected shape', () => {
      const mockPayload = ['dummy', 'payload']
      const expected = {
        type: FETCH_DATA_SUCCESS,
        name: 'services',
        status: 'success',
        payload: mockPayload
      }
      expect(fetchServicesSuccess(['dummy', 'payload'])).toEqual(expected)
    })
  })
})

describe('bikes actions', () => {
  describe('fetchBikesLoading', () => {
    it('returns an object with the expected shape', () => {
      const expected = {
        type: FETCH_DATA_LOADING,
        name: 'bikes',
        status: 'loading'
      }
      expect(fetchBikesLoading(true)).toEqual(expected)
    })
  })

  describe('fetchBikesError', () => {
    it('returns an object with the expected shape', () => {
      const expected = {
        type: FETCH_DATA_ERROR,
        name: 'bikes',
        status: 'error'
      }
      expect(fetchBikesError(true)).toEqual(expected)
    })
  })

  describe('fetchBikesSuccess', () => {
    it('returns an object with the expected shape', () => {
      const mockPayload = ['dummy', 'payload']
      const expected = {
        type: FETCH_DATA_SUCCESS,
        name: 'bikes',
        status: 'success',
        payload: mockPayload
      }
      expect(fetchBikesSuccess(['dummy', 'payload'])).toEqual(expected)
    })
  })
})