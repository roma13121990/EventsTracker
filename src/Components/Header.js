import React from 'react'

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
    }

    handleChange(event) {
        if (event.key === 'Enter') {
            this.setState({value: event.target.value},() => {
                this.props.onSearch(this.state.value);
            });
        }
        else{
            this.setState({value: event.target.value});
        }
    }

    render() {
        return (
            <header className="App-header row">
                <a className="App-logo col-xs-6 col-md-6 col-sm-6 col-lg-6" href="https://www.bandsintown.com/?came_from=257">
                    <img src="https://assets.bandsintown.com/images/bitFist.svg" alt="Bandsintown Fist"/>
                    <img src="https://assets.bandsintown.com/images/bitText.svg" alt="Bandsintown Text"
                         className="Logo-text"/>
                </a>
                <div className="Searchbar col-xs-6 col-md-6 col-sm-6 col-lg-6">
                    <div>
                        <img src="https://assets.bandsintown.com/images/loupe.svg" alt="" />
                        <input type="text" className="value" placeholder="eg. Maroon 5" onKeyPress={(e) => this.handleChange(e)}/>
                    </div>
                </div>
            </header>)
    }
}