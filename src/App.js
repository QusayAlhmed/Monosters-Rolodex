import React, { Component } from 'react'
import CardList from './components/Card-list/CardList.component'
import SearchInput from './components/searchComponent/searchInput.component'
import './App.css'
class App extends Component {
  state = {
    monesters: [],
    searchFiled: '',
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monesters: users }))
  }

  render() {
    const { monesters, searchFiled } = this.state
    const searchMonesters = monesters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    )
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchInput
          placeholder='Search Monesters'
          handleChange={(e) => this.setState({ searchFiled: e.target.value })}
        />
        <CardList monesters={searchMonesters} />
      </div>
    )
  }
}

export default App
