import React from 'react';
import { keywords } from 'utils/constants';
import MonthlyReports from '../../pages-sections/monthly-reports';

export const metadata = {
  title: 'Monthly Reports',
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

const IndexPage = () => <MonthlyReports />;

export default IndexPage;
