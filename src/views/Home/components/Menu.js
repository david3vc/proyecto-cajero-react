import React from 'react'
import iconoDeposito from '../../../assets/img/depositar1.png'
import iconoRetiro from '../../../assets/img/retiro.png'
import iconoTransferencia from '../../../assets/img/transfer.png'
import iconoMovimientos from '../../../assets/img/movimientos.jpg'

export default function Menu() {
    return (
        <>
            <div className='contenedorMenu'>
                <div className='contenedorMenu__uno'>
                    <div className='contenedorMenu__deposito items'>
                        <a>
                            <div className='contenido'>
                                <div className='texto'>
                                    <span>Depósito</span>
                                </div>
                                <div className='icono'>
                                    <img src={iconoDeposito} />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='contenedorMenu__retiro items'>
                        <a>
                            <div className='contenido'>
                                <div className='texto'>
                                    <span>Retiro</span>
                                </div>
                                <div className='icono'>
                                    <img src={iconoRetiro} />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='contenedorMenu__dos'>
                    <div className='contenedorMenu__transferencia items'>
                        <a>
                            <div className='contenido'>
                                <div className='texto'>
                                    <span>Transferencia</span>
                                </div>
                                <div className='icono'>
                                    <img src={iconoTransferencia} />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='contenedorMenu__movimientos items'>
                        <a>
                            <div className='contenido'>
                                <div className='texto'>
                                    <span>Movimientos</span>
                                </div>
                                <div className='icono'>
                                    <img src={iconoMovimientos} />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
