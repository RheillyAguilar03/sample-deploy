
import React from 'react'
import './Home.css'
import DataHome from './DataHome'

function Home() {

    // fetching na data
    const { homecontent } = DataHome

    return (

        <section>

            <div className='flex flex-col items-center justify-center md:p-44 home' >
                {
                    homecontent.map(homecontent => {
                        return (
                            <div key={homecontent.id}>
                                <div className='hometext text-center'>
                                    <h1 className='text-4xl font-bold mb-4'>{homecontent.text}</h1>
                                    <p className='text-xl mb-4' >{homecontent.description}</p>
                                    <button className='text-xl px-2 py-2 duration-200 ease-in-out hover:bg-[#e63946] border-2 border-solid border-[#e64946] hover:text-white text-black rounded-lg'>{homecontent.button}</button>
                                </div>

                                <img src={homecontent.image} alt="" className='image mt-10' />
                            </div>
                        )
                    })
                }

            </div>

        </section>

    )
}

export default Home