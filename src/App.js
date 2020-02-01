import React, { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { connect } from 'react-redux';
import { setMonsters } from './redux/monster/monster.actions';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.props.setMonsters(users));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setMonsters: monsters => dispatch(setMonsters(monsters))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
