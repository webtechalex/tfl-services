import createDataReducer from './createDataReducer'
import { FETCH_DATA_SUCCESS } from '../../actions'

describe('createDataReducer', () => {
  describe('given a reducer name', () => {
    it('returns a function', () => {
      expect(typeof createDataReducer('services')).toBe('function')
    })
  })

  describe('reducer function', () => {
    const reducer = createDataReducer('services')

    describe('given no arguments', () => {
      it('returns a default state', () => {
        expect(reducer()).toEqual({"data": [], "hasError": false, "isLoading": false})
      })
    })

    describe('given an action with an incompatible name', () => {
      it('returns the current state', () => {
        const mockState = {"data": [], "hasError": false, "isLoading": true}
        const action = { type: FETCH_DATA_SUCCESS, name: 'bikes', status: 'success', payload: ['dummy', 'payload'] }
        expect(reducer(mockState, action)).toBe(mockState)
      })
    })

    describe('given an action with a compatible name', () => {
      it('returns the action payload as the new state', () => {
        const mockState = {"data": [], "hasError": false, "isLoading": true}
        const payload = ['dummy', 'payload']
        const expected = {"data": payload, "hasError": false, "isLoading": false}
        const action = { type: FETCH_DATA_SUCCESS, name: 'services', status: 'success', payload }
        expect(reducer(mockState, action)).toEqual(expected)
      })
    })
  })
})
