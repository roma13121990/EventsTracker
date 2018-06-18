import React from 'react'
import renderer from 'react-test-renderer'
import Event from "../../Containers/Event";

describe('<Event />', () => {
    const propsWithMinutes = {
        "event":
            {
                "offers": [{
                    "type": "Tickets",
                    "url": "https://www.bandsintown.com/t/1001879056?app_id=ID&came_from=267",
                    "status": "available"
                }],
                "venue": {
                    "name": "Madison Square Garden",
                    "country": "United States",
                    "region": "NY",
                    "city": "New York",
                    "latitude": "40.7507387",
                    "longitude": "-73.9937978"
                },
                "datetime": "2018-10-15T19:30:09",
                "on_sale_datetime": "",
                "description": "",
                "lineup": ["Maroon 5", "Julia Michaels"],
                "id": "1001879056",
                "artist_id": "510",
                "url": "https://www.bandsintown.com/e/1001879056?app_id=ID&came_from=267"
            }
    };

    const propsWithoutMinutes = {
        "event":
            {
                "offers": [{
                    "type": "Tickets",
                    "url": "https://www.bandsintown.com/t/1008981694?app_id=ID&came_from=267",
                    "status": "available"
                }],
                "venue": {
                    "name": "Parque Fundidora",
                    "country": "Mexico",
                    "region": "NL",
                    "city": "Monterrey",
                    "latitude": "25.6666667",
                    "longitude": "-100.3166667"
                },
                "datetime": "2018-08-25T19:00:00",
                "on_sale_datetime": "2018-05-16T21:30:00",
                "description": "",
                "lineup": ["Maroon 5", "Alvaro Díaz", "Gareth Emery", "Jack Novak", "NERVO", "Kali Uchis", "French Montana", "Grouplove", "GG Magree"],
                "id": "1008981694",
                "artist_id": "510",
                "url": "https://www.bandsintown.com/e/1008981694?app_id=ID&came_from=267"
            }
    };
    it('should generate snapshot for Event component', () => {
        const tree = renderer.create(<Event {...propsWithMinutes}/>).toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('should generate snapshot for Event component', () => {
        const tree = renderer.create(<Event {...propsWithoutMinutes}/>).toJSON();
        expect(tree).toMatchSnapshot()
    })


});