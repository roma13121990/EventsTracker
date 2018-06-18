export const Reducer = (state = [], action) => {
    switch (action.type) {
        case 'ARTIST': {
            return {
                ...state,
                value: action.text
            };
        }

        default:
            return state;
    }

};
