import React, { Component } from 'react'
import './App.css';
import axios from 'axios'


class App extends Component {
  state = {
    data: [],
    type: '',
    label: '',
    icon: '',
  }

  componentDidMount() {
    axios.get('http://localhost:3001/fields').then(resp => {  
      console.table(resp.data)

      this.setState({
        data: resp.data,
        type: resp.data.type,
        label: resp.data.label,
        icon: resp.data.icon
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
              // if 'text', else if 'select', else 'textarea'
              data.type === 'text' | data.type === 'email' | data.type === 'tel' ? 
                <div className="input-box">
                  <i className={`fa ${data.icon}`}></i>
                  <input key={data.id} type={data.type} placeholder={data.label}/>
                </div>
                : data.type === 'select' ? 
                  <div key={data.id}>
                    <i className={`fa ${data.icon}`}></i>
                    <select key={data.id} id={data.id}>
                      <option>{data.label}</option> 
                      {data.options.map(opt => (
                        <option key={opt.id} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                :
                <div>
                  <i className={`fa ${data.icon}`}></i>
                  <textarea key={data.id} placeholder={data.label}></textarea>
                </div>
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
