import axios from 'axios';

const WebApi = {
    getDetailsByArtist(artist){
       return axios.get(`https://rest.bandsintown.com/artists/${artist}?app_id=ID`);
    },

    getEventsByArtist(artist){
        return axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=ID`);
    }
};

export default WebApi;
