import React from 'react';
import { keywords } from 'utils/constants';
import DailyReports from '../../pages-sections/daily-reports';

export const metadata = {
  title: 'Daily Reports',
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

const IndexPage = () => <DailyReports />;

export default IndexPage;
