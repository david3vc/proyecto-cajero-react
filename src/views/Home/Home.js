import React from 'react'
import Menu from './components/Menu'
import Perfil from './components/Perfil'
import Tarjeta from './components/Tarjeta'
import './home.css'

export default function Home() {
    return (
        <>
            <div className='contenedorHome'>
                <Perfil />
                <Tarjeta />
                <Menu />
            </div>
        </>
    )
}
