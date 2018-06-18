import React from 'react'
import renderer from 'react-test-renderer'
import Header from "../../Components/Header";
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('<Header />', () => {

    it('Should generate snapshot for Header component', () => {
        const tree = renderer.create(<Header />).toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('Should call handleChange on keyPress on input', () => {
        const wrapper = mount(<Header />);
        wrapper.find(".value").simulate("keyPress", {
            target: {
                value: "Maroon 5"
            }
        });
        expect(wrapper.instance().state).toEqual({"value": "Maroon 5"})
    })

    it('Should call handleChange on keyPress on input when enter is pressed', () => {
        const onSearch = jest.fn();
        const wrapper = mount(<Header onSearch={onSearch} />);

        wrapper.find(".value").simulate("keyPress", {key:"Enter",
            target: {
                value: "Maroon 5"
            }
        });
        expect(wrapper.instance().state).toEqual({"value": "Maroon 5"})
        expect(onSearch).toHaveBeenCalled();
    })
});