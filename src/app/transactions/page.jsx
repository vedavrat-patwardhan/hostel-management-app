import React from 'react';
import { keywords } from 'utils/constants';
import Addtransaction from '../../pages-sections/transactions';

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

const IndexPage = () => <Addtransaction />;
export default IndexPage;
