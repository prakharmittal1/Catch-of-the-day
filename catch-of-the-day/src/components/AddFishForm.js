// import React from "react";

// class AddFishForm extends React.Component {
//     createFish(event){

//         event.preventDefault();
//         console.log('Gonna make some fish');
//         const fish ={

//             name:this.name.value,
//             price:this.price.value,
//             status:this.status.value,
//             desc:this.desc.value,
//             image:this.image.value,
//         }
//         this.props.addFish(fish);
//         //console.log(fish);
//         this.fishForm.reset();

//     }
//   render() {
//     return(

//         <form ref={(input) => this.fishForm=input}className="fish-edit" onSubmit={(e)=>this.createFish(e)}>
//             <input ref={(input)=> this.name = input} type="text" placeholder="Fish Name"/>
//             <input ref={(input)=> this.price = input} type="text" placeholder="Fish Price"/>

//             <select ref={(input)=> this.status = input}>
//                 <option value="available">Fresh!</option>
//                 <option value="Unavailable">Sold Out!</option>
//             </select>

//             <textarea ref={(input)=> this.desc = input} type="text" placeholder="Fish Desc"/>
//             <input ref={(input)=> this.image = input} type="text" placeholder="Fish Image"/>
//             <button type="submit">+ Add Item</button>
    
//         </form>

//     )
//   }
// }

// export default AddFishForm;

import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    // 1.  stop the form from submitting
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addFish(fish);
    // refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
