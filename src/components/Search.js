import React, { Component } from 'react'
import axios from 'axios'
import './App.css';

const { API_KEY } = process.env

// dummy api url (ignore/change later on)
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
      .then(({ data }) => {
        this.setState({
          results: data.data // MusicGraph returns an object named data, 
                             // as does axios. So... data.data                             
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }

  render() {
    return (
      <div id="searchbar-box">
        <form>
          <input id="searchbar" class="form-control active-cyan-4 mb-4"
            placeholder="Search"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
        </form>
      </div>
    )
  }
}

export default Search
