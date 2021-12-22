import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function Formulario() {
    return (
        <>
            <div className='contenedorFormularioRegistro'>
                <div className='registroCard'>
                    <form>
                        <div className='registroCard__header'>
                            {/*<img src={logoBanco} />*/}
                            <p>Imagen</p>
                            <p>Registro</p>
                        </div>
                        <div className='registroCard__body'>
                            <div className='contenedorNombre'>
                                <input type="text" placeholder='ingrese su nombre' />
                            </div>
                            <div className='contenedorEmail'>
                                <input type="text" placeholder='ingrese su direccion' />
                            </div>
                            <div className='contenedorEmail'>
                                <input type="email" placeholder='email address' />
                            </div>
                            <div className='contenedorPassword'>
                                <input type="password" placeholder='******' />
                            </div>
                            <div className='contenedorBoton'>
                                <button>Registrarse</button>
                            </div>
                        </div>
                        <div className='registroCard__footer'>
                            <p>¿Ya tiene una cuenta? <Link to='/login'>Auntentíquese aquí</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
