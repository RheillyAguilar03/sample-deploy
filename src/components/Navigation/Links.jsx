import React, { useState } from 'react'
import './Navigation.css'
import Head from './Head'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Links() {

    const [active, setActive] = useState(false)

    // set navigation to sticky 
    const stickyNav = () => {
        //console.log(window.scrollY)
        if (window.scrollY) {
            setActive(true)
        } else {
            setActive(false)
        }
    }

    window.addEventListener('scroll', stickyNav)

    return (
        <>
            <div className={active ? 'navigation stickyNav' : 'navigation'}>

                <img src="asset/logo.png" className='w-24' />

                <div className='w-2/5 relative bg-white search-input'>
                    <input type="text"
                        className='border-solid border-2 border-[#e63946] px-12 py-2 w-full bg-transparent text-lg rounded-xl outline-[#e63946]'
                        placeholder='Search'
                    />
                    <i className="fa-solid fa-magnifying-glass absolute left-0 text-center py-2 px-3 text-lg "></i>
                </div>

                <div className='flex'>
                    <Link to='Signup'>
                        <i className="duration-200 ease-in-out hover:text-[#e63946] fa-solid fa-user text-2xl mr-3 text-[#00253e] cursor-pointer"></i>
                    </Link>
                    <div className=''>
                        <Link>
                            <i className="duration-200 ease-in-out hover:text-[#e63946] fa-solid fa-bag-shopping text-2xl mr-3  cursor-pointer text-[#00253e]"></i>
                            <p className='absolute bg-[rgba(255,0,0,.75)] px-2 py-0.5 rounded-full text-sm text-white font-bold top-6 ml-1.5 cursor-default'>0</p>
                        </Link>

                    </div>
                </div>

            </div>

            <div>
                <Head />
            </div>
        </>
    )
}

export default Links