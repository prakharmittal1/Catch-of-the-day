// import React from 'react';
// class StorePicker extends React.Component{
//     goToStore(event){
//         event.preventDefault();
//         console.log("You changed the URL");
//  }
//  render(){
//         return (
//             <form className="store-selector" onSubmit={this.goToStore}>
//                 <h2>Please Enter Store</h2>
//                 <input type="text" required placeholder="Store Name" ref={(input) =>{this.storeInput=input}} />
//                 <button type="submit">Visit Store</button>
//             </form>
//         )    
//     }
// }
// export default StorePicker;

import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    console.log(this);

    // 3. Change the page to /store/whatever-they-entered
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;