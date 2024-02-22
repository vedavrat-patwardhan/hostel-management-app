import React from 'react';
import { keywords } from 'utils/constants';
import YearlyReports from '../../pages-sections/yearly-reports';

export const metadata = {
  title: 'Yearly Reports',
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

const IndexPage = () => <YearlyReports />;

export default IndexPage;
