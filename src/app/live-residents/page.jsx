import React from 'react';
import { keywords } from 'utils/constants';
import LiveResidents from '../../pages-sections/live-residents';

export const metadata = {
  title: 'Live Residents',
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

const IndexPage = () => <LiveResidents />;

export default IndexPage;
