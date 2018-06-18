
export const getItem = (key) => localStorage.getItem(key);

export const setItem = (key,data) => localStorage.setItem(key,data);

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('artist');
        return serializedState ? JSON.parse(serializedState) : {value: 'Maroon 5'};
    } catch (err) {
        return [];
    }
};


export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('artist', serializedState);
        /* istanbul ignore next */
    } catch (err) {
        // Ignore write errors.
    }
};