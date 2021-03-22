import React from 'react';
import {render} from 'react-dom';
//import { BrowserRouter as Router} from 'react-router-dom';
//import {Match} from 'react-router';
import Router from './components/Router'
import './css/style.css';
import App from './components/App';

import StorePicker from './components/StorePicker';

// const Root=()=>{
//     return (
//         <Router>
//         <div>
//         <Match exactly pattern="/" component={StorePicker} />
//         <Match pattern="/store/:storeId" component={App} />
//         </div> 
//         </Router>
//     )
// }

render(<Router/>, document.querySelector('#main'));


