import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

// Components
import PageHome from './components/Site/PageHome'
import Signup from './components/Sign Up/Signup'



function App() {
    return (

        <>
            <Routes>
                <Route path='/' element={<PageHome/>} />
                <Route path='Signup' element={<Signup/>} />
            </Routes>
        </>
    )
}

export default App