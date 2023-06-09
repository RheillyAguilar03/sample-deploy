import React from 'react'
import './Product.css'
import FlashDeal from './FlashDeal'

function Product({ product }) {
    return (
        <>

            <section className='pb-40 flex flex-wrap items-center justify-center'>
                {
                    product.map((product) => {
                        return (
                            <div className='w-72 bg-[#00253e] m-7 rounded-xl shadow-md shadow-black' key={product.id}>
                                <div className='img p-4 rounded-lg '>
                                    <img src={product.image} alt="" className='w-52 m-auto hover:scale-110' />
                                </div>

                                <div className='p-6'>
                                    <div className='text-center text-white  mb-5'>
                                        <h1 className='text-xl font-bold'>{product.name}</h1>
                                        <p className='text-lg'>{product.size}</p>
                                        <span className='text-lg'>{product.price}</span>
                                    </div>
                                    <div className='flex items-center justify-between buttons'>
                                        <button className='duration-200 ease-in-out px-9 py-2 hover:bg-[#e63946] border-2 border-solid border-[#e64946] text-white font-bold rounded-lg buy'>Buy</button>
                                        <button className='duration-200 ease-in-out px-4 py-2 hover:bg-[#e63946] border-2 border-solid border-[#e64946] text-white font-bold rounded-lg'>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </section>

            <section>
                <FlashDeal />
            </section>

        </>
    )
}

export default Product