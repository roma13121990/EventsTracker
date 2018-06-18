import React from 'react'
import renderer from 'react-test-renderer'
import NotFound from "../../Components/NotFound";

describe('<NotFound />', () => {

    it('Should generate snapshot for Header component', () => {
        const tree = renderer.create(<NotFound text="Not Found"/>).toJSON();
        expect(tree).toMatchSnapshot()
    })


});