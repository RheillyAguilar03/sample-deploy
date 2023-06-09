import React, { useState } from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'


function Head() {

    const [menu, setMenu] = useState('menuLinks')

    // oprn the navigation links for the small device or screen
    const openMenu = () => {
        setMenu('menuLinks active')
    }

    // close the navigation links
    const removeMenu = () => {
        setMenu('menuLinks')
    }


    return (

        <>
            <ul className={menu}>

                <div className='icon exisButton' onClick={removeMenu}>
                    <i className="fa-sharp fa-solid fa-xmark text-3xl cursor-pointer"></i>
                </div>

                <li className='text-2xl text-[#00253e] hover:text-[#e63946] duration-150 ease-in-out font-bold mr-10'><Link to='/'>Home</Link></li>
                <li className='text-2xl text-[#00253e] hover:text-[#e63946] duration-150 ease-in-out font-bold mr-10'><Link to='/mobile'>Mobile</Link></li>
                <li className='text-2xl text-[#00253e] hover:text-[#e63946] duration-150 ease-in-out font-bold mr-10'><Link>Accessories</Link></li>
                <li className='text-2xl text-[#00253e] hover:text-[#e63946] duration-150 ease-in-out font-bold mr-10'><Link>About</Link></li>
            </ul>

            <div className='icon menuButton' onClick={openMenu}>
                <i className="fa-solid fa-bars text-3xl cursor-pointer"></i>
            </div>

        </>
    )
}

export default Head