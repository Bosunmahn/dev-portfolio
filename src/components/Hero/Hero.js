import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Shopify Builds. <br />
        React Speed.
      </SectionTitle>
      <SectionText>
        Clean code, fast stores, and ecom that actually sells. Now booking
        projects on Upwork.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://www.upwork.com/freelancers/copygeek?viewMode=1")
        }
      >
        Get in Touch
      </Button>
    </LeftSection>
  </section>
);

export default Hero;