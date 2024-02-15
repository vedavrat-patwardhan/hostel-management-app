import React from 'react';
import { keywords } from 'utils/constants';
import AddTransaction from '../../pages-sections/transaction-details';

export const metadata = {
  title: 'Transaction Details',
  description: `Form to add transactions in hostel.`,
  authors: [
    {
      name: 'Vedavrat Patwardhan',
      url: 'https://www.linkedin.com/in/vedavrat/',
    },
  ],
  viewport: 'width=device-width, initial-scale=1',
  keywords,
};

const IndexPage = () => <AddTransaction />;
export default IndexPage;
