import React from 'react';
import './home.css'
import Icons from '../../components/icons/icons';
import image from './image.png'

function Home() {
  return (
    <main>
      <section className='language'>
        <a href='#'>PT-BR</a>
      </section>
      <section className='home-container'>
        <div className='text-container'>
          <div className='im-guilherme'>
            <small className='im'>I'm</small>
            <p className='guilherme'>GUILHERME</p>
          </div>
          <div className='web-developer'>
            <p>Web Developer Full Stack</p>
          </div>
          <div className='phrase'>
          <p >
            "Turning ideas into reality, one pixel at a time,
             through the power of creativity and technology."
            </p>
          </div>
          <div className='icons'>
            <Icons />
          </div>
        </div>
        <div className='image-container'>
          <img src={ image } alt="Foto de Guilherme" />
        </div>
      </section>
    </main>
    
  )
}

export default Home;