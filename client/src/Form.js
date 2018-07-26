import React, { Component } from 'react'
import axios from 'axios'

import { subscribe } from './lib/pubsub'
import { getFormElements } from './actions/data.js'

const Form = (props) => (
	<div className="container">
		<div className="header">
			<h1>Sign Up For My Web App</h1>
		</div>
		
		<form>
	    <input name="id" value={this.state.id} type={this.state.type} placeholder={this.state.label}/>
	    <button type="submit">Submit Form</button>
	  </form>
	</div>
)

class FormContainer extends Component {
	state = {
    type: '',
    label: '',
    // id: '',
    // icon: '',
    // options: ''
  }

  componentDidMount() {
  	console.log(this.props)

  	// this.setState({
  	// 	type: 
  	// })
  }

  render() {
  	return (
			<FormContainer type=
		)
  }
}

// <div className="container">
          
//           <div className="header">
//             <h1>Sign Up For My Web App</h1>
//           </div>

//           <div className="form-elements">
//             
//             <input type="text"/>
//             <input type="text"/>
//             <input type="text"/>

//             <select name="" id="">
//               <option value=""></option>
//             </select>

//             <textarea name="" id="" cols="30" rows="10"></textarea>

//             <input type="text"/>
//             <input type="text"/>
//           </div>

//           <div className="submit-footer">
//             <button>Submit</button>
//           </div>

//         </div>