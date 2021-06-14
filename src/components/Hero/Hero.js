import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (

  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Saksham's Portfolio
        </SectionTitle>
        <SectionText>
        Junior in High School who loves to code. Focused on full stack web-development and ai. 
        </SectionText>
        <Button onClick={() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "auto",
            /* you can also use 'auto' behaviour 
         in place of 'smooth' */
          }); 
        }}>Contact Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;