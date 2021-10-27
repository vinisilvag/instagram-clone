import React from 'react';

import { Helmet } from 'react-helmet-async';

import { Header } from '../components/Header';

import { useAuth } from '../hooks/useAuth';

import instagramLogoText from '../assets/images/insta-logo-text.svg';

export const SignIn: React.FC = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="bg-gray-50 h-screen">
      <Helmet>
        <title>Sign In | Instagram</title>
        <meta
          name="description"
          content="Log in to the platform and connect with people you know!"
        />
      </Helmet>

      <Header />

      <section className="w-full mt-32 flex items-center justify-center">
        <main className="flex flex-col justify-center items-center">
          <img src={instagramLogoText} alt="Instagram" className="w-34 h-16" />

          <span className="text-center">
            This was built only for educational purposes.
          </span>

          <button
            type="button"
            onClick={signInWithGoogle}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-7 rounded-md mt-8 focus:ring-2 ring-blue-500 ring-offset-2"
          >
            Sign in with Google
          </button>
        </main>
      </section>
    </div>
  );
};
