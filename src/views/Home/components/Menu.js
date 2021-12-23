import React, {useRef, useEffect} from 'react'
import iconoDeposito from '../../../assets/img/depositar1.png'
import iconoRetiro from '../../../assets/img/retiro.png'
import iconoTransferencia from '../../../assets/img/transfer.png'
import iconoMovimientos from '../../../assets/img/movimientos.jpg'

export default function Menu() {

    const contenidoPanelPrincipal = useRef();
    const contenidoDeposito = useRef();
    const contenidoRetiro = useRef();
    const contenidoTransferencia = useRef();
    const contenidoMovimientos = useRef();

    useEffect(() => {
        contenidoDeposito.current.style.display = 'none';
        contenidoPanelPrincipal.current.style.display = 'block';
        contenidoRetiro.current.style.display = 'none';
        contenidoTransferencia.current.style.display = 'none';
        contenidoMovimientos.current.style.display = 'none';
    }, [])

    const mostrarContenidoDeposito = () => {
        contenidoDeposito.current.style.display = 'block';
        contenidoPanelPrincipal.current.style.display = 'none';
        contenidoRetiro.current.style.display = 'none';
        contenidoTransferencia.current.style.display = 'none';
        contenidoMovimientos.current.style.display = 'none';
    }

    const mostrarContenidoRetiro = () => {
        contenidoDeposito.current.style.display = 'none';
        contenidoPanelPrincipal.current.style.display = 'none';
        contenidoRetiro.current.style.display = 'block';
        contenidoTransferencia.current.style.display = 'none';
        contenidoMovimientos.current.style.display = 'none';
    }

    const mostrarContenidoTransferencia = () => {
        contenidoDeposito.current.style.display = 'none';
        contenidoPanelPrincipal.current.style.display = 'none';
        contenidoRetiro.current.style.display = 'none';
        contenidoTransferencia.current.style.display = 'block';
        contenidoMovimientos.current.style.display = 'none';
    }

    const mostrarContenidoMovimientos = () => {
        contenidoDeposito.current.style.display = 'none';
        contenidoPanelPrincipal.current.style.display = 'none';
        contenidoRetiro.current.style.display = 'none';
        contenidoTransferencia.current.style.display = 'none';
        contenidoMovimientos.current.style.display = 'block';
    }

    return (
        <>
            <div className='contenedorMenu'>
                <div className='contenedorMenu__uno'>
                    <div className='contenedorMenu__deposito items'>
                        <a onClick={mostrarContenidoDeposito}>
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
                        <a onClick={mostrarContenidoRetiro}>
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
                        <a onClick={mostrarContenidoTransferencia}>
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
                        <a onClick={mostrarContenidoMovimientos}>
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
            <div className='contenedorPanel'>
                <div className='bienvenido' ref={contenidoPanelPrincipal}>
                    Bienvenido al Banco Continental
                </div>
                <div className='deposito' ref={contenidoDeposito} >
                    Déposito panel
                </div>
                <div className='retiro' ref={contenidoRetiro} >
                    Retiro panel
                </div>
                <div className='transferencia' ref={contenidoTransferencia} >
                    Transferencia panel
                </div>
                <div className='movimientos' ref={contenidoMovimientos} >
                    Movimientos panel
                </div>
            </div>
        </>
    )
}
