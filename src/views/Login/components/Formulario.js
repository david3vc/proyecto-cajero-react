import React from 'react';
import logoBanco from '../../../assets/img/4.png'
import { Link, useHistory } from 'react-router-dom'

export default function Formulario() {
    return (
        <>
            <div className='contenedorFormularioLogin'>
                <div className='loginCard'>
                    <form>
                        <div className='loginCard__header'>
                            {/*<img src={logoBanco} />*/}
                            <p>Imagen</p>
                            <p>Iniciar sesión</p>
                        </div>
                        <div className='loginCard__body'>
                            <div className='contenedorEmail'>
                                <input type="email" placeholder='email address' />
                            </div>
                            <div className='contenedorPassword'>
                                <input type="password" placeholder='******' />
                            </div>
                            <div className='contenedorBoton'>
                                <button>Login</button>
                            </div>
                        </div>
                        <div className='loginCard__footer'>
                            <p>¿No tiene cuenta aún? <Link to='/registrarse'>Regístrese aquí</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
