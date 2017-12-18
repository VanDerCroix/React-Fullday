import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Dialogo extends Component{
	constructor(props) {
		super(props);

		this.state = {
			open: false,
		}

		this._handleOnClick = this._handleOnClick.bind(this);
		this._handleClose = this._handleClose.bind(this);
		this._handleOpen = this._handleOpen.bind(this);
	}

	_handleOnClick(ev) {
		let estado = !this.state.open;

		this.setState({
			open: estado,
		});
	}

	_handleClose() {
		this.setState({
			open: false,
		});
	}


	_handleOpen() {
		this.setState({
			open: true,
		});
	}

	render() {
	    const actions = [
	      <FlatButton
	        label="Cancel"
	        primary={true}
	        onClick={this._handleClose}
	      />,
	      <FlatButton
	        label="Submit"
	        primary={true}
	        keyboardFocused={true}
	        onClick={this._handleClose}
	      />,
	    ];
		return(
			<div>
				<RaisedButton label="Dialog" onClick={this._handleOpen} />
				<Dialog
		          title="Dialogo de ejm"
		          actions={actions}
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this._handleOnClick}
		        >

		        Texto del dialogo de ejemplo</Dialog>
     
			</div>
		);
	}
}

export default Dialogo;