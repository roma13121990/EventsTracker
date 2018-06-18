import {getItem, loadState, saveState, setItem} from "../../Utils/LocalStorage";

describe("Local store",()=> {

    it("should load default state from local storage if state is null", () => {

        setItem("artist", null);
        expect(loadState()).toEqual({"value": "Maroon 5"});

    });

    it("should load default state from local storage if state is undefined", () => {

        setItem("artist", undefined);
        expect(loadState()).toEqual({"value": "Maroon 5"});

    });

    it("should load default state from local storage if state is not valid", () => {

        setItem("artist", {"value": "Maroon 5"});
        expect(loadState()).toEqual([]);

    });

    it("should load state from local storage", () => {

        const state = {"value": "Maroon 5"};
        setItem("artist", JSON.stringify(state));

        expect(loadState()).toEqual(state);

    });

    it("should return undefined if save state to local storage throws exception", () => {

        const state = "";
        saveState(state);

        expect(getItem("artist")).toEqual(JSON.stringify(state));
    });

    it("should save state to local storage", () => {

        const state = {"value": "Maroon 5"};
        saveState(state);

        expect(getItem("artist")).toEqual(JSON.stringify(state));
    });
});