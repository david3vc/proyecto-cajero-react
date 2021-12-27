import React, {useRef, useEffect} from 'react';
import Swal from 'sweetalert2';
import iconoDeposito from '../../../assets/img/depositar1.png';
import iconoRetiro from '../../../assets/img/retiro.png';
import iconoTransferencia from '../../../assets/img/transfer.png';
import iconoMovimientos from '../../../assets/img/movimientos.jpg';
import iconoFlechaAbajo from '../../../assets/img/flecha-hacia-abajo1.png';
import iconoFlechaArriba from '../../../assets/img/flecha-hacia-arriba1.png';
import iconoFlechaTransfer1 from '../../../assets/img/transfer1.png';

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

    const animacionEnviarDeposito = () => {
        Swal.fire({
            title: 'Confirmación',
            icon: 'question',
            html: `
                <div style="padding: 0px 15px;">
                    <div style="display:flex; justify-content: space-between;">
                        <span>Concepto:</span>
                        <span>Depósito...</span>
                    </div>
                    <div style="display:flex; justify-content: space-between;">
                        <span>Cuenta cargo</span>
                        <span>**** 4444</span>
                    </div>
                    <div style="display:flex; justify-content: space-between; font-weight: bold;">
                        <span>Total:</span>
                        <span>S/. 1.00</span>
                    </div>
                </div>
            `,
            confirmButtonColor: '#3085d6', // 3085d6
            confirmButtonText: 'Confirmar',
        }).then((result)=>{
            if(result.isConfirmed) {
                Swal.fire({
                    title: 'Depósito exitoso',
                    icon: 'success',
                    timer: "2000",
                    showConfirmButton: false,
                })
            }
        })
    }

    const animacionEnviarTransferencia = () => {
        Swal.fire({
            title: 'Confirmación',
            icon: 'question',
            html: `
                <div style="padding: 0px 15px;">
                    <div style="display:flex; justify-content: space-between;">
                        <span>De:</span>
                        <span>David</span>
                    </div>
                    <div style="display:flex; justify-content: space-between;">
                        <span>Para:</span>
                        <span>Izi</span>
                    </div>
                    <div style="display:flex; justify-content: space-between;">
                        <span>Asunto:</span>
                        <span>lalalalalalal</span>
                    </div>
                    <div style="display:flex; justify-content: space-between;">
                        <span>Cuenta cargo</span>
                        <span>**** 4444</span>
                    </div>
                    <div style="display:flex; justify-content: space-between; font-weight: bold;">
                        <span>Total:</span>
                        <span>S/. 1.00</span>
                    </div>
                </div>
            `,
            confirmButtonColor: '#3085d6', // 3085d6
            confirmButtonText: 'Confirmar',
        }).then((result)=>{
            if(result.isConfirmed) {
                Swal.fire({
                    title: 'Transferencia exitosa',
                    icon: 'success',
                    timer: "2000",
                    showConfirmButton: false,
                })
            }
        })
    }

    return (
        <>
            <div className='contenedorMenu'>
                <div className='contenedorMenu__uno'>
                    <div className='contenedorMenu__deposito items'>
                        <a onClick={mostrarContenidoDeposito}>
                            <div className='contenido'>
                                <div className='texto'>
                                    <span>Depositar</span>
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
                                    <span>Retirar</span>
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
                                    <span>Transferir</span>
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
                    <div className='deposito__contenedor'>
                        <form>
                            <div className='deposito__titulo'>
                                <span>Depósito</span>
                            </div>
                            <div className='deposito__contenedorMonto'>
                                <span>Ingrese monto</span>
                                <input type='number' placeholder='' />
                            </div>
                            <div className='deposito__contenedorBoton'>
                                <span onClick={animacionEnviarDeposito}>Siguiente</span>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='retiro' ref={contenidoRetiro} >
                    <div className='retiro__contenedor'>
                        <form>
                            <div className='retiro__titulo'>
                                <span>Retiro</span>
                            </div>
                            <div className='retiro__contenedorMonto'>
                                <span>Ingrese monto</span>
                                <input type='number' placeholder='' />
                            </div>
                            <div className='retiro__contenedorBoton'>
                                <span onClick={animacionEnviarDeposito}>Siguiente</span>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='transferencia' ref={contenidoTransferencia} >
                    <div className='transferencia__contenedor'>
                        <form>
                            <div className='transferencia__titulo'>
                                <span>Transferencia</span>
                            </div>
                            <div className='transferencia__contenedorSelect'>
                                <span>Seleccione cuenta</span>
                                <select>
                                    <option></option>
                                    <option>Cuenta 01</option>
                                    <option>Cuenta 02</option>
                                    <option>Cuenta 03</option>
                                    <option>Cuenta 04</option>
                                </select>
                            </div>
                            <div className='transferencia__contenedorMonto'>
                                <span>Ingrese monto</span>
                                <input type='number' placeholder='' />
                            </div>
                            <div className='transferencia__contenedorAsunto'>
                                <span>Asunto</span>
                                <input type='text' placeholder='' />
                            </div>
                            <div className='transferencia__contenedorBoton'>
                                <span onClick={animacionEnviarTransferencia}>Siguiente</span>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='movimientos' ref={contenidoMovimientos} >
                    <div className='movimientos__contenedor'>
                        <div className='fila_1'>
                            <span>Transacciones</span>
                            <span>Bienvenido a sus transacciones</span>
                        </div>
                        <div className='fila_2'>
                            <div className='ingreso'>
                                <img src={iconoFlechaArriba} width='30px' />
                                <span>Ingreso</span>
                                <span>$ 451</span>
                            </div>
                            <div className='barra'>
                                <span>|</span>
                            </div>
                            <div className='egreso'>
                                <img src={iconoFlechaAbajo} width='30px' />
                                <span>Egreso</span>
                                <span>$ 451</span>
                            </div>
                        </div>
                        <div className='fila_3'>
                            <div className='tabla_movil'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ACTIVIDAD</th>
                                            <th>MODO</th>
                                            <th>FECHA</th>
                                            <th>MONTO</th>
                                        </tr> 
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={iconoFlechaTransfer1} width='26px' />
                                                <span>Transferencia de David Vera</span>
                                            </td>
                                            <td>12 Jul 2020, 12:30 PM</td>
                                            <td>
                                                <span>img</span>
                                                <span>$ 50</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={iconoFlechaTransfer1} width='26px' />
                                                <span>Transferencia de David Vera</span>
                                            </td>
                                            <td>12 Jul 2020, 12:30 PM</td>
                                            <td>
                                                <span>img</span>
                                                <span>$ 50</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='tabla_escritorio'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ACTIVIDAD</th>
                                            <th>FECHA</th>
                                            <th>MONTO</th>
                                        </tr> 
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={iconoFlechaTransfer1} width='26px' />
                                                <span>Transferencia de David Vera</span>
                                            </td>
                                            <td>12 Jul 2020, 12:30 PM</td>
                                            <td>
                                                <span>img</span>
                                                <span>$ 50</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={iconoFlechaTransfer1} width='26px' />
                                                <span>Transferencia de David Vera</span>
                                            </td>
                                            <td>12 Jul 2020, 12:30 PM</td>
                                            <td>
                                                <span>img</span>
                                                <span>$ 50</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
