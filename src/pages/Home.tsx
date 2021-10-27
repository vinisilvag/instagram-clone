import React from 'react';

import { Helmet } from 'react-helmet-async';

import { Header } from '../components/Header';
import { Feed } from '../components/Feed';

export const Home: React.FC = () => (
  <div className="bg-gray-50 h-full">
    <Helmet>
      <title>Instagram</title>
      <meta
        name="description"
        content="Share incredible moments and eternalize them with your friends!"
      />
    </Helmet>

    <Header />

    <Feed />
  </div>
);
