import React from 'react';
import './home.css';
import { useTranslation } from 'react-i18next';
import Icons from '../../components/icons/icons';
import image from '../../assets/imgs/image.png';

function Home() {
  const language = localStorage.getItem('i18nextLng');
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <main>
      <section className="language">
        <button
          onClick={ () => changeLanguage(t('language') === 'PT-BR' ? 'pt' : 'en') }
        >
          {t('language')}
        </button>
      </section>
      <section className="home-container">
        <div className="text-container">
          <div className="im-guilherme">
            <small
              className={ `im ${language === 'pt' ? 'pt' : ''}` }
            >
              {t('text.im')}

            </small>
            <p className="guilherme">GUILHERME</p>
          </div>
          <div className={ `web-developer ${language === 'pt' ? 'pt' : ''}` }>
            <p>{t('text.webDeveloper')}</p>
          </div>
          <div className={ `phrase ${language === 'pt' ? 'pt' : ''}` }>
            <p>
              {t('text.phrase')}
            </p>
          </div>
          <div className="icons">
            <Icons />
          </div>
        </div>
        <div className="im-guilherme-mobile">
          <small className="im">{t('text.im')}</small>
          <p className="guilherme">GUILHERME</p>
        </div>
        <div className="web-developer-mobile">
          <p>{t('text.webDeveloper')}</p>
        </div>
        <div className="image-container">
          <img src={ image } alt="Foto de Guilherme" />
        </div>
        <div className="phrase-mobile">
          <p>
            {t('text.phrase')}
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
