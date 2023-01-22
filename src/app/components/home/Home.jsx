import React from 'react'
import VideoHeader from '../../../media/videoheader.mp4'
import Coworkers from '../../../media/coworkers.jpeg'

export default function Home() {
  return (
    <div>
      <div className='home-section-header d-flex justify-content-center' style={{ background: '#F4F6FC'}}>
        <video src={VideoHeader} autoPlay muted loop></video>
      </div>
      <div className='home-section-about d-flex'>
        <div className='col'>
          <img src={ Coworkers } alt="image" style={{ width: '40vw'}}/>
        </div>
        <div className='col'>
          <h1>Somos creativos</h1>
          <p>Somos una empresa especializada en servicios de social media, marketing digital, copywriting o textos publicitarios y SEO. Ofrecemos soluciones personalizadas para aumentar la presencia en línea de tu negocio y alcanzar a tu audiencia objetivo. Además ofrecemos clases y capacitaciones para que tu equipo pueda manejar tu presencia en línea de manera eficiente. También contamos con servicios de creación y diseño de páginas web para que tu negocio tenga una imagen profesional en línea. Nuestro objetivo es ayudarte a alcanzar tus metas y llegar a más clientes potenciales. Contáctanos hoy mismo para obtener más información sobre cómo podemos ayudarte.</p>
        </div>
      </div>
    </div>
  )
}
