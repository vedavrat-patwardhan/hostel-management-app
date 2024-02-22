import React from 'react';
import { keywords } from 'utils/constants';
import LeftResidents from '../../pages-sections/left-residents';

export const metadata = {
  title: 'Left Residents',
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

const IndexPage = () => <LeftResidents />;

export default IndexPage;
