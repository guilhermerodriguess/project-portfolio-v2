import React from 'react';
import './icons.css'
import gitHubIcon from '../../assets/icons/github-icon.svg';
import linkedInIcon from '../../assets/icons/linkedin-icon.svg';
import whatsAppIcon from '../../assets/icons/whatsapp-icon.svg';
import gmailIcon from '../../assets/icons/gmail-icon.svg';


function Icons() {
  return (
    <>
      <img alt='github icon' className='icon' src={ gitHubIcon } href='https://github.com/guilhermerodriguess' target='_blank' rel="noreferrer">
      </img>
      <img alt='linkedin icon'className='icon' src={ linkedInIcon } href='https://www.linkedin.com/in/guilhermerodriguessousa/' target='_blank' rel="noreferrer">
      </img>
      <img alt='whatsapp icon' className='icon' src={ whatsAppIcon } href='https://api.whatsapp.com/send?phone=5561999951917&text=Ol%C3%A1,%20vim%20pelo%20seu%20portf%C3%B3lio!' target='_blank' rel="noreferrer">
      </img>
      <img alt ='gmail icon' className='icon' src={ gmailIcon } href='mailto:grsguiga@gmail.com' target='_blank' rel="noreferrer">
      </img>
    </>
  )
}

export default Icons;