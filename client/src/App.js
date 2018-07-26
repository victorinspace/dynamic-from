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
    let data = axios.get('http://localhost:3001/fields').then(resp => {
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
          
          <form>
            {this.state.data.map(data => (
              // if text, else select, else textarea
              data.type === 'text' ? <input key={data.id} type={data.type} placeholder={data.label}/>
                : data.type === 'select' ? <select key={data.id} placeholder={data.label}></select>
                : <textarea key={data.id} placeholder={data.label}></textarea>
            ))}
            <button type="submit">Submit Form</button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
