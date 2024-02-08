import IndexPageView from 'pages-sections/home';
import React from 'react';
import { keywords } from 'utils/constants';

export const metadata = {
  title: 'Hostel Management',
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

export const IndexPage = () => <IndexPageView />;
