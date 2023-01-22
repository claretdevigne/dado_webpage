import React from 'react'
import LOGO from '../../../media/logo.png'

export default function MenuBar() {
  return (
    <div className='px-5' style={{ background: '#F4F6FC'}}>
        <div className='row align-items-center' style={{ height: '70px'}}>
            <div className='col'>
                <img src={LOGO} alt="logo" style={{ width: '100px' }}/>
            </div>
            <div className='col row'>
                <div className='col text-center' style={{ cursor: 'pointer' }}>
                    SERVICIOS
                </div>
                <div className='col text-center' style={{ cursor: 'pointer' }}>
                    ACADEMIA
                </div>
                <div className='col text-center' style={{ cursor: 'pointer' }}>
                    BLOGS
                </div>
                <div className='col text-center' style={{ cursor: 'pointer' }}>
                    CONTACTO
                </div>
            </div>
        </div>
    </div>
  )
}
