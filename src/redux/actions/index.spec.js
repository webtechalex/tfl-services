import { fetchServicesLoading, fetchServicesError, fetchServicesSuccess, fetchBikesLoading, fetchBikesError, fetchBikesSuccess, FETCH_DATA_LOADING, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from './'


describe('services actions', () => {
  describe('fetchServicesLoading', () => {
    it('returns an object with the expected shape', () => {
      const expected = {
        type: FETCH_DATA_LOADING,
        name: 'services'
      }
      expect(fetchServicesLoading(true)).toEqual(expected)
    })
  })

  describe('fetchServicesError', () => {
    it('returns an object with the expected shape', () => {
      const expected = {
        type: FETCH_DATA_ERROR,
        name: 'services'
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
        name: 'bikes'
      }
      expect(fetchBikesLoading(true)).toEqual(expected)
    })
  })

  describe('fetchBikesError', () => {
    it('returns an object with the expected shape', () => {
      const expected = {
        type: FETCH_DATA_ERROR,
        name: 'bikes'
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
        payload: mockPayload
      }
      expect(fetchBikesSuccess(['dummy', 'payload'])).toEqual(expected)
    })
  })
})