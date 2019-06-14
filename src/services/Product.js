import React from 'react';
import { Link } from "react-router-dom";
// import {ApiCall} from "../services/ApiCall.js";
export class Product extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        products: []
      };
    }

    componentDidMount() {
      // let va = new ApiCall();
      fetch("https://raw.githubusercontent.com/akisusd/akisusd.github.io/master/src/product-data.js")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              products: result.products
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    render() {
      let { error, isLoaded, products } = this.state;
      let search = '';
      let param = '';
      let filter = '';
      let tempProducts = [];

      if (this.props.search)
        search = this.props.search.split('=')[1];
      if (this.props.param)
        param = this.props.param.query;
      if (this.props.filter)
        filter = this.props.filter;
      for (let product of products) {
        if (search) {
          if (product.name.includes(search)) {
              tempProducts.push(product);
          }
        } else if (filter) {
          if (filter === 'brand') {
            if (product.classifications[1].taxon.name === param) {
              tempProducts.push(product);
            }
          }
          else {
            if (product.classifications[0].taxon.name === param) {
              tempProducts.push(product);
            }
          }
        }
        else {
          if (param) {
            if (product.id.toString() === param) {
              tempProducts.push(product);
            }
          }
          else {
            tempProducts = products;
          }
        }
      }

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div><img alt="loader" className="loader" src="../../images/loading.gif"/></div>;
      } else {
        return (
          <div className="grid__container">
          {tempProducts.map(product => (
            <div key={product.name} className="product">
              <Link className="product__link"  to={'/product/'+product.id}>
                <img alt="sample" className="product__img" src="../../images/sample.jpg"/>
                <div className="product__name">{product.name}</div>
                <div className="product__price">{product.price}</div>
                <div className="product__description">{product.description}</div>
               </Link>
            </div>
            ))}
            </div>
        );
      }
    }
  }