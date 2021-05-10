import React, { Component } from 'react';

import { Cardlist }  from './components/card-list/card-list.component.jsx';
import { Searchbox } from './components/search-box/search-box.component.jsx';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      datastring: 'Hello World',
      monsters : [],
      searchField : ''
    };
  
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(fetch_output => fetch_output.json())
    .then(json_output => this.setState({ monsters : json_output }));
  }

  handleChange = (inputData) => {
    this.setState({ searchField : inputData.target.value })
  };

  render(){
    const { monsters, searchField } = this.state;
    const filteredMosters = monsters.filter(x => x.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
    <div className="App">
      <br/>
      <h1> Monster Search Engine </h1>
      <Searchbox placeholder='Search Monsters' 
      handleChange={this.handleChange}
      />
      <Cardlist monsters={filteredMosters} />
    
      
    {/* 
      inputData => this.setState({ searchField : inputData.target.value })
      cardlist code video 32
      <Cardlist name="chitrang">
      { this.state.monsters.map(monster=>(
        <h1 key={ monster.id }>{ monster.name }</h1>
      ))
      }
      </Cardlist> 
    */}


    {/*

      <div style={{ width:'100%', height:'200px' }}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         { this.state.datastring }
        </p>
        <button onClick = { () => this.setState({ datastring : 'Hello Chitrang' }) }> Change The Name </button>
        <br/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Angular
        </a>
      </header>
    */}
    
    </div>

    )
  }
}

export default App;