This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### `npm i`

Install all essential node packages

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


## More about the solution

**Main components**
* Header
* HomePage
* Poster
* Events
`Header` contains logic to search an Artist by name.
     
`HomePage` contains logic for rendering header, Poster and the events of searched Artist.

`Poster` contains logic to show low level Artist details.
 
`Events` contains logic for showing events list


#Algorithm details

Application uses reducers for firing action on search.
Components are connected to store so that action fired on same state, state is returned without mutation.
All api calls are handled in webApi file

## Other Highlights

Loader is added across application for enhanced user experience
Use of Redux for storing data on refresh
User can directly book tickets with the help of 'Tickets and RSVP button'
User can directly go to the facebook page of Artist by clicking on FB icon(which is available only if there exist FB page of that artist)
User can see the location of the venue on Google map which is navigated on click of "Show on map" link
Snapshot testing  
       
## Things which can be considered     

User login
Storing user favorite events.
Showing days remaining for the event.
Showing if the tickets are available.
    
### Hope the design is self explanatory :-)











