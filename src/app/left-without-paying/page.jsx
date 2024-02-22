import React from 'react';
import { keywords } from 'utils/constants';
import LeftWithoutPaying from '../../pages-sections/left-without-paying/page';

export const metadata = {
  title: 'Left Without Paying',
  description: `Hostel Management platform for hostel owners.`,
  authors: [
    {
      name: 'Vedavrat Patwardhan',
      url: 'https://www.linkedin.com/in/vedavrat/',
    },
  ],
  viewport: 'width=device-width, initial-scale=1',
  keywords,
};

const IndexPage = () => <LeftWithoutPaying />;

export default IndexPage;
