import React from 'react'
import logoVisa from '../../../assets/img/symbols.png'
import asterisco from '../../../assets/img/asterisk.png'

export default function Tarjeta() {
    return (
        <>
            <div className='contenedorTarjeta'>
                <div className='contenido'>
                    <div className='contenido__disponible'>
                        <span>457 USD</span>
                        <img src={logoVisa} width="42px" />
                    </div>
                    <div className='contenido__numeroTarjeta'>
                        <div className='digitos'>
                            <img src={asterisco} width='12px' />
                            <img src={asterisco} width='12px' />
                            <img src={asterisco} width='12px' />
                            <img src={asterisco} width='12px' />
                        </div>
                        <div className='digitos'>
                            <img src={asterisco} width='12px' />
                            <img src={asterisco} width='12px' />
                            <img src={asterisco} width='12px' />
                            <img src={asterisco} width='12px' />
                        </div>
                        <div className='digitos'>
                            <img src={asterisco} width='12px' />
                            <img src={asterisco} width='12px' />
                            <img src={asterisco} width='12px' />
                            <img src={asterisco} width='12px' />
                        </div>
                        <div className='digitos'>
                            <span>4</span>
                            <span>4</span>
                            <span>4</span>
                            <span>4</span>
                        </div>
                    </div>
                    <div className='contenido__datos'>
                        <div className='nombres'>
                            <span>David Vera</span>
                        </div>
                        <div className='fecha'>
                            <span>Expires 04/24</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
