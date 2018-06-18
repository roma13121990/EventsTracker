
import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme from "enzyme/build/index";
import axios from "axios/index";
import MockAdapter from 'axios-mock-adapter';
import Adapter from 'enzyme-adapter-react-16';
import {HomePage} from "../../Containers/HomePage";
import {asyncAssert} from "../test-utils/AsyncUtil";
import {mount} from "enzyme";

Enzyme.configure({adapter: new Adapter()});

const mock = new MockAdapter(axios);

mock.onGet('https://rest.bandsintown.com/artists/Maroon 5?app_id=ID').reply(200,
    {
        "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/8479721.jpeg",
        "mbid": "0ab49580-c84f-44d4-875f-d83760ea2cfe",
        "facebook_page_url": "https://www.facebook.com/maroon5",
        "image_url": "https://s3.amazonaws.com/bit-photos/large/8479721.jpeg", "name": "Maroon 5",
        "id": "510", "tracker_count": 4371693, "upcoming_event_count": 44,
        "url": "https://www.bandsintown.com/a/510?came_from=267&app_id=ID"
    });


mock.onGet('https://rest.bandsintown.com/artists/Maroon 5/events?app_id=ID').reply(200,
    [{
        "offers": [{
            "type": "Tickets", "url": "https://www.bandsintown.com/t/1001879151?app_id=ID&came_from=267",
            "status": "available"
        }], "venue": {
            "name": "Smoothie King Center",
            "country": "United States", "region": "LA", "city": "New Orleans", "latitude": "29.948942",
            "longitude": "-90.081992"
        }, "datetime": "2018-06-14T19:30:00", "on_sale_datetime": "2017-11-04T15:00:00",
        "description": "", "lineup": ["Maroon 5", "Julia Michaels"], "id": "1001879151", "artist_id": "510",
        "url": "https://www.bandsintown.com/e/1001879151?app_id=ID&came_from=267"
    }]);


describe('<HomePage />', () => {

    const props = {"value" : "Maroon 5"}

    it("should render component after loading", (done) => {
        const artistSearch = jest.fn();
        const wrapper = mount(
            <HomePage {...props} artistSearch={artistSearch} />);

        asyncAssert(done, () => {
            expect(wrapper.instance().state.loaded).toEqual(true)
        })
    });

});
