import React from 'react';
import { Link } from "react-router-dom";

export class Navigation extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        products: [],
        value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
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

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render (){
        const { error, isLoaded, products } = this.state;
        let categoryList = [];
        let brandList = [];

        products.map(product => {
            categoryList.push(product.classifications[0].taxon.name);
            brandList.push(product.classifications[1].taxon.name);
        });

        let categories = Array.from(new Set(categoryList));
        let brands = Array.from(new Set(brandList));

        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div><img alt="loader" className="loader" src="../../images/loading.gif"/></div>;
        } else {

        return <div><header className="header">
                    <div className="header__logo">
                        <Link to='/'>
                            <img alt="logo" className="header__logo__img" src="../../images/logo.png"/>
                        </Link>
                    </div>
                    <div className="header__search">
                        <input id="search" type="search" name="q" placeholder="Search" onChange={this.handleChange} className="header__search__input"/>
                        <Link className="header__search__button" to={'/search?q='+this.state.value}>Search</Link>
                    </div>
                    <div className="menutoggle" role="menuitem" tabIndex="0">
                        <span className="first-line" />
                        <span className="second-line" />
                        <span className="third-line" />
                    </div>
                </header>
                <div className="sidemenu">
                    <div className="sidemenu__category__label">
                        <h2>Shop by categories</h2>
                    </div>
                    <div>
                    {categories.map(category => (
                        <Link className="sidemenu__category__link" key={category} to={'/category/'+category}>{category}</Link>
                    ))}
                    </div>
                    <div className="sidemenu__category__label">
                        <h2>Shop by brand</h2>
                    </div>
                    <div>
                    {brands.map(brand => (
                        <Link className="sidemenu__category__link" key={brand} to={'/brand/'+brand}>{brand}</Link>
                    ))}
                    </div>
                </div>
                <main className="content">
                    <div className="content__container"></div>
                </main>
                </div>
        }
    }
}