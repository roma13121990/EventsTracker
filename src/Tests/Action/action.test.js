import * as actions from '../../Actions/Action'

describe('<Actions />', () => {
    it('should return entered search item and action type', () => {
        const text = 'Maroon 5';
        const expectedAction = {
            type: 'ARTIST',
            text
        }
        expect(actions.artistSearch(text)).toEqual(expectedAction)
    })
});