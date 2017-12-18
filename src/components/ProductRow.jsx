import React, { Component } from 'react';

class ProductRow extends Component {
	render() {
		var prod = this.props.data;
		return (
			<tr>
				<td>{prod.id}</td>
				<td>{prod.nombre}</td>
				<td>{prod.precio}</td>
			</tr>
		);
	}
}

export default ProductRow;