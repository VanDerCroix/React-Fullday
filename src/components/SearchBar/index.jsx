import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchIcon from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import { Card, CardActions, CardText } from 'material-ui/Card';

import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { darkBlack } from 'material-ui/styles/colors';

// importamos los componentes actions y dialogs
// import Actions from '../Actions';
// import Dialogs from '../Dialog';

const personaComponent = (person) => (
    <div style={{paddingLeft: '60px'}}>
        {person.nombre + " " + person.apellido}
    </div>
);


class SearchBar extends Component {
    // Se puede declarar dentro de una clase componente de React
    static defaultProps = {
        placeholderProp: 'Bienvenidos'
    }

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            searchValue: '',
            personasArray: []
        };
        // Agregamos un bind a cada manejador de eventos
        this._handleOnChangeSearchInput = this._handleOnChangeSearchInput.bind(this);
        this._handleOnClickSearch = this._handleOnClickSearch.bind(this);

        this.getPersonasFromApiAsync = this.getPersonasFromApiAsync.bind(this);
    }

    _handleOnChangeSearchInput(val) {
        this.setState({
            searchValue: val.trim()
        });
    }
    // Manejar el evento onClick para el boton search
    _handleOnClickSearch(val) {
        this.getPersonasFromApiAsync(val);        
    }

    getPersonasFromApiAsync(query) {
        return fetch('http://localhost:3012/personas?nombre_like=' + query)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ personasArray: responseJson });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        const { placeholderProp } = this.props;
        const {personasArray} = this.state;

        const listItems = personasArray.length > -1 ? personasArray.map((persona) =>
            <List key={persona.id.toString()}>
                <ListItem style={{ textAlign: 'left'}}
                    leftAvatar={<Avatar style={{ width: 100, height: 100, top: '-8px'}}
                    src={persona.foto} />}                    
                    primaryText={personaComponent(persona)}
                    secondaryText={
                        <p style={{paddingLeft: '60px'}}>
                            <span style={{ color: darkBlack }}>{persona.ciudad }</span><br />
                           <span>{persona.email}</span>
                </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
            </List>
        ) : [];

        return (
            <div>               
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <IconButton onClick={(event) => this._handleOnClickSearch(this.state.searchValue)} tooltip="Click para buscar" touch={true} style={{ position: 'absolute', right: 0, top: 0, width: 20, height: 20 }}>
                        <SearchIcon />
                    </IconButton>

                    <TextField
                        hintText={placeholderProp}
                        onChange={(event, value) => this._handleOnChangeSearchInput(value)}
                    />
                </div>

                <Card expanded={true} onExpandChange={this.handleExpandChange} style={{ width: '50%', margin: 'auto' }}>
                    <CardText>
                        {
                            listItems
                        }

                    </CardText>


                    <CardActions>
                        <span>TALLER CREATE-REACT-APP 2017</span>
                    </CardActions>
                </Card>



            </div>
        );

    }
}


SearchBar.propTypes = {
    placeholderProp: PropTypes.string
};

export default SearchBar;
