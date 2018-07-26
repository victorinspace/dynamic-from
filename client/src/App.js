import React, { Component } from 'react'
import './App.css';
import axios from 'axios'


class App extends Component {
  state = {
    data: [],
    type: '',
    label: '',
    // id: '',
    // icon: '',
    // options: ''
  }

  componentDidMount() {
    axios.get('http://localhost:3001/fields').then(resp => {  
      console.log(resp.data)

      this.setState({
        data: resp.data,
        type: resp.data.type,
        label: resp.data.label
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="header">
            <h1>Sign Up For My Web App</h1>
          </div>
          
          <form className="form-area">
            {this.state.data.map(data => (
              // if text, else if select, else textarea
              data.type === 'text' | data.type === 'email' | data.type === 'tel' ? 
                <input key={data.id} type={data.type} placeholder={data.label}/>
                : data.type === 'select' ? 
                  <select key={data.id} id={data.id}>
                    <option>{data.label}</option>
                    {data.options.map(opt => (
                      <option key={opt.id} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                : <textarea key={data.id} placeholder={data.label}></textarea>
            ))}
          </form>

          <div className="submit-area">
              <button type="submit">Submit Form</button>
            </div>
        </div>
      </div>
    )
  }
}

export default App
