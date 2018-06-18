import React from 'react'
import WebApi from "../Utils/WebApi";
import Event from "./Event";
import Header from "../Components/Header";
import Poster from "../Components/Poster";
import {artistSearch} from "../Actions/Action";
import {connect} from "react-redux";
import NotFound from "../Components/NotFound";
import Loader from 'react-loader'

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            events: [],
            loaded:false,

        }
    }

    componentDidMount() {
        this.handleSearchArtist(this.props.value);
    }

    handleSearchArtist = (value) => {
        if(value === "") { value = this.props.value}
            this.props.artistSearch(value);
            WebApi.getDetailsByArtist(value).then(response => {
                if (response.data.id) {
                    this.setState({data: response.data,loaded:false});
                    WebApi.getEventsByArtist(value).then(response => {
                        this.setState({events: response.data,loaded:true})
                    })
                }
                else {
                    this.setState({data: "", events: [],loaded:true});
                }
            });


    };

    render() {
        let {data} = this.state;
        return (
            <Loader loaded={this.state.loaded}>
                <Header onSearch={this.handleSearchArtist}/>
                <div className="Container">{this.state.data !== "" ? <div className="row">
                    <Poster artist={data}/>
                    <div className="List col-sm-6 col-md-9 col-lg-9 col-xs-12">
                        {this.state.events.length > 0 ? <ul className="row">{this.state.events.map(event =>
                        <Event event={event} key={event.id}/>
                    )}
                        </ul>:<NotFound text="No upcoming events!"/>}
                    </div>
                </div> : <NotFound text="No data found!"/>}</div>
            </Loader>
        )
    }
}

const mapStateToProps = state => ({
    value: state.value,
});
const mapActionToProps = {
    artistSearch
}
export default connect(mapStateToProps,mapActionToProps)(HomePage)