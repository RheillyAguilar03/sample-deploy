import React from 'react'
import DataBrands from './DataBrands'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Brands.css'

function Brand() {

    // for slider
    const settings = {
        infinite: true,
        speed: 400,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
    };

    // fetching data 
    const { brandsimage } = DataBrands

    return (

        <div className='w-4/5 mx-auto pb-14 brands'>
            <Slider {...settings} className='overflow-hidden'>
                {
                    brandsimage.map((brandsimage) => {
                        return (
                            <div key={brandsimage.id}>
                                <img src={brandsimage.image} className='w-52' alt='' />
                            </div>
                        )
                    })
                }
            </Slider>


        </div>
    )
}

export default Brand