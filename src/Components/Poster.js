import React from 'react';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'
export default class Poster extends React.Component {
    render() {
        let {name, facebook_page_url, thumb_url} = this.props.artist;
        return (
            <div className="Poster col-sm-6 col-md-3 col-lg-3 col-xs-12">
                <div>
                    <section><img src={thumb_url} alt={name} width="200" height="200" className="mx-auto d-block"/></section>
                    <aside><p>{name}</p>
                        {facebook_page_url !== "" && <a href={facebook_page_url} target="_blank"><FaFacebookSquare style={{color: '#4266b2',fontSize: 25}}/></a>}
                    </aside>
                </div>
            </div>
        )
    }
}