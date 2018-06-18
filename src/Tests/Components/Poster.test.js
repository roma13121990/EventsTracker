import React from 'react'
import renderer from 'react-test-renderer'
import Poster from "../../Components/Poster";

describe('<Poster />', () => {
    const propsWithFB = {
        "artist":
            {
                "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/215115.jpeg",
                "mbid": "03746227-c9f9-4b3b-b2c6-9b31f79564f7",
                "facebook_page_url": "",
                "image_url": "https://s3.amazonaws.com/bit-photos/large/215115.jpeg",
                "name": "Selena", "id": "26427",
                "tracker_count": 303472, "upcoming_event_count": 0,
                "url": "https://www.bandsintown.com/a/26427?came_from=267&app_id=ID"
            }
    };

    const propsWithoutFB = {
        "artist":
            {
                "thumb_url":"https://s3.amazonaws.com/bit-photos/thumb/8458441.jpeg","mbid":"",
                "facebook_page_url":"https://www.facebook.com/dualipaofficial/",
                "image_url":"https://s3.amazonaws.com/bit-photos/large/8458441.jpeg",
                "name":"Dua Lipa","id":"1750816","tracker_count":196950,"upcoming_event_count":74,
                "url":"https://www.bandsintown.com/a/1750816?came_from=267&app_id=ID"
            }
    };

    it('should generate snapshot for Poster component with FB Url', () => {
        const tree = renderer.create(<Poster {...propsWithFB}/>).toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('should generate snapshot for Poster component without FB url', () => {
        const tree = renderer.create(<Poster {...propsWithoutFB}/>).toJSON();
        expect(tree).toMatchSnapshot()
    })
});