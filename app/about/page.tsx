import React from 'react'
import HeroSection from '../component/Hero-section'
import Wrapper from './section/wrapper'
import Value from './section/Value'

const AboutPage:React.FC = () => {
  return (
    <div
    className='about'
       style={{
      background: 'linear-gradient(167.02deg, #E31E24 12.38%, #B0171C 18%, #7D1114 100%)'
    }}
     >
         <HeroSection  
      heroBold='Freshly Prepared Today.'
      heroLight='At Your Door in Minutes.'
      heroDesc='We don’t believe in "sitting on a shelf." Our kitchen fires up every morning to prep fresh ingredients from scratch, ensuring every meal is handled with care and delivered at peak flavor.'
      btnClassName="shadow-0"
      heroImg="/aboutImg.png"
      heroWidth={386}
      heroHeight={399}
      heroAlt="food Image"
      />
      <Wrapper />
      <Value />
    </div>
  )
}

export default AboutPage  
