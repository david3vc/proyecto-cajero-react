import React from 'react'
import Menu from './components/Menu'
import Panel from './components/Panel'
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
                <Panel />
            </div>
        </>
    )
}
