import React from 'react';
import './home.css';
import Icons from '../../components/icons/icons';
import image from '../../assets/imgs/image.png';

function Home() {
  return (
    <main>
      <section className="language">
        <button>PT-BR</button>
      </section>
      <section className="home-container">
        <div className="text-container">
          <div className="im-guilherme">
            <small className="im">I&apos;m</small>
            <p className="guilherme">GUILHERME</p>
          </div>
          <div className="web-developer">
            <p>Web Developer Full Stack</p>
          </div>
          <div className="phrase">
            <p>
              &quot;Turning ideas into reality, one pixel at a time,
              through the power of creativity and technology.&quot;
            </p>
          </div>
          <div className="icons">
            <Icons />
          </div>
        </div>
        <div className="im-guilherme-mobile">
          <small className="im">I&apos;m</small>
          <p className="guilherme">GUILHERME</p>
        </div>
        <div className="web-developer-mobile">
          <p>Web Developer Full Stack</p>
        </div>
        <div className="image-container">
          <img src={ image } alt="Foto de Guilherme" />
        </div>
        <div className="phrase-mobile">
          <p>
            &quot;Turning ideas into reality, one pixel at a time,
            through the power of creativity and technology.&quot;
          </p>
        </div>
        <div className="icons-mobile">
          <Icons />
        </div>
      </section>
    </main>

  );
}

export default Home;
