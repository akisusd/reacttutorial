import React from 'react';
import {Product} from '../services/Product';

export class ProductPage extends React.Component {

    render () {
        let param  = this.props.match.params;
        return <Product param={param}/>;
    }
}