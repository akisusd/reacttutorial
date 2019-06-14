import React from 'react';
import {Product} from '../services/Product';

export class Search extends React.Component {

    render () {
        let param  = this.props.match.params;
        let filter = this.props.match.path.split('/')[1];
        return <Product param={param} filter={filter} search={this.props.location.search}/>;
    }
}