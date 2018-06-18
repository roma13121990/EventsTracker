import {Reducer} from '../../Reducers/Reducer'

describe('artist reducer', () => {
  it('should handle initial state', () => {
    expect(
      Reducer(undefined, {})
    ).toEqual([])
  });

  it('should handle adding a pokemon to My PokemonListItem list', () => {
    expect(
        Reducer([], {
        type: 'ARTIST',
        text: 'Maroon 5'
      })
    ).toEqual({"value": "Maroon 5"})
  })

});
