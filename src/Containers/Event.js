import React from 'react';
import FaMapMarker from 'react-icons/lib/fa/map-marker'

export default class Event extends React.Component {

    getTime = () => {
        let hours = new Date(this.props.event.datetime).getHours();
        let min = new Date(this.props.event.datetime).getMinutes();
        min = min === 0 ? "00" : min;
        return hours+ ":" +min
    };

    getDate = () => {
        return new Date(this.props.event.datetime).getDate();
    };

    getMonth = () => {
        let monthList = ["JAN",'FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
        let month = new Date(this.props.event.datetime).getMonth();
        return monthList[month]
    };

    render() {
        let {venue, url} = this.props.event;
        let location = `https://www.google.com/maps?q=${venue.latitude},${venue.longitude}`
        return (
            <li className="ev-card-container col-sm-12 col-xs-12 col-md-6 col-lg-4">
                <section className="evt-card">
                    <div className="evt-date-col">
                        <p>{this.getDate()}</p>
                        <p>{this.getMonth()}</p>
                        <p>{this.getTime()}</p>
                        <p>Onwards</p>

                    </div>
                    <div className="evt-info-col">
                        <p title={venue.name}>{venue.name}</p>
                        <p title={venue.city+", "+venue.country}>{venue.city}, {venue.country}</p>
                        <a href={location} target="_blank"><FaMapMarker />Show on map</a>

                    </div>
                    <footer>
                        <a className="Book-now" href={url} target="_blank">Tickets & RSVP</a>
                    </footer>

                </section>
            </li>
        )
    }
}