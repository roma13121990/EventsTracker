import React from 'react'
import Enzyme from "enzyme/build/index";
import Adapter from 'enzyme-adapter-react-16';
import App from "../Components/App";
import renderer from "react-test-renderer"

Enzyme.configure({adapter: new Adapter()});

describe('<App />', () => {
    it('should test App', () => {
        // const tree = renderer.create( <App />).toJSON();
        // expect(tree).toMatchSnapshot();
    });
})
