import React from 'react'
import Brand from '../Brands/Brand'
import Navigation from '../Navigation/Navigation'
import Home from '../Home/Home'
import Product from '../Product/Product'
import ProductData from '../Product/ProductData'

function PageHome() {

    const {product} = ProductData


    return (
        <>
            <Navigation />
            <Home />
            <Brand />
            <Product product={product} />
        </>
    )
}

export default PageHome