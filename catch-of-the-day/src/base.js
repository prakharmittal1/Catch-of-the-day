import Rebase from 're-base';
import firebase from 'firebase';

// const base = Rebase.createClass({

//     apiKey: "AIzaSyDWtGaAirBwYOoXMsbU3rmkae_QaksLtFE",
//     authDomain: "catch-of-the-day-prakhar-966a2.firebaseapp.com",
//     databaseURL: "https://catch-of-the-day-prakhar-966a2-default-rtdb.firebaseio.com",

// });

// export default base;

const config={
    apiKey: "AIzaSyDWtGaAirBwYOoXMsbU3rmkae_QaksLtFE",
    authDomain: "catch-of-the-day-prakhar-966a2.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-prakhar-966a2-default-rtdb.firebaseio.com",
}
const app = firebase.initializeApp(config)
const base=Rebase.createClass(app.database())

export default base;
// export {base};



