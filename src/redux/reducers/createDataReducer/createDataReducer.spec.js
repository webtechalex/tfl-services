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
        expect(reducer()).toEqual(null)
      })
    })

    describe('given an action with an incompatible name', () => {
      it('returns the current state', () => {
        const mockState = ['dummy', 'state']
        expect(reducer(mockState, { type: FETCH_DATA_SUCCESS, name: 'bikes', payload: ['dummy', 'payload'] })).toBe(mockState)
      })
    })

    describe('given an action with a compatible name', () => {
      it('returns the action payload as the new state', () => {
        const mockPayload = ['dummy', 'payload']
        expect(reducer(null, { type: FETCH_DATA_SUCCESS, name: 'services', payload: mockPayload } )).toBe(mockPayload)
      })
    })
  })
})
