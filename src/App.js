import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProductForm from './components/ProductForm.jsx';
import Dialogo from './components/Dialogo/index.jsx';
import SearchBar from './components/SearchBar/index.jsx';

var arrayProductos = [
  {id: '01', nombre: 'zenbook', precio: '1500'},
  {id: '02', nombre: 'mac', precio: '2000'},
  {id: '03', nombre: 'pixel xl', precio: '800'}
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(ev) {
    debugger;
    var nombre = ev.target.value;
    //if (nombre == "holi") alert("ok");

    this.setState({
      name: nombre
    });
  }

  componentDidMount() {
    console.log("did mount");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <br />
        <SearchBar></SearchBar>

        <br /><br />
        <ProductForm productos={arrayProductos}></ProductForm>


        <br />
        <Dialogo />

        <br /><br />
      </div>
    );
  }
}

export default App;
