import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 30, text: "Shopify Stores Built" },
  { number: 10, text: "Custom Shopify Apps Developed" },
  { number: 20000, text: "Product Listings Managed" },
  { number: 12, text: "Payment Gateways Integrated" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Acomplishments
    </SectionTitle>
    <Boxes>
      {data.map((card, index)=> (
        <Box key={index}>
           <BoxNum>{card.number}+</BoxNum>
           <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
