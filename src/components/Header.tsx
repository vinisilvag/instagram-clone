import React from 'react';

import { Link } from 'react-router-dom';

import { HomeIcon } from '@heroicons/react/solid';
import {
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  ChatAlt2Icon,
  MenuIcon,
} from '@heroicons/react/outline';

import { useAuth } from '../hooks/useAuth';

import instagramLogoText from '../assets/images/insta-logo-text.svg';
import instagramLogoIcon from '../assets/images/insta-logo-icon.png';
import { useModal } from '../hooks/useModal';

export const Header: React.FC = () => {
  const { user, isAuthenticated, signInWithGoogle } = useAuth();
  const { handleOpenModal } = useModal();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-100">
      <nav className="flex justify-between items-center max-w-5xl m-auto h-14 px-4 lg:px-0">
        <Link to="/">
          <img
            src={instagramLogoText}
            alt="Instagram"
            className="w-28 h-10 hidden md:flex"
          />
          <img
            src={instagramLogoIcon}
            alt="Instagram"
            className="w-8 h-8 md:hidden"
          />
        </Link>

        {isAuthenticated && (
          <input
            type="text"
            placeholder="Search"
            className="min-w-0 bg-gray-50 px-3 mx-3 text-sm border border-gray-300 rounded-md py-1.5 hidden sm:flex"
          />
        )}

        {isAuthenticated ? (
          <div className="flex flex-row items-center gap-3">
            <div className="flex-row gap-3 hidden md:flex">
              <button type="button">
                <HomeIcon className="w-6 h-6 text-gray-800" />
              </button>

              <button type="button">
                <ChatAlt2Icon className="w-6 h-6 text-gray-700" />
              </button>

              <button type="button" onClick={handleOpenModal}>
                <PlusCircleIcon className="w-6 h-6 text-gray-700" />
              </button>

              <button type="button">
                <UserGroupIcon className="w-6 h-6 text-gray-700" />
              </button>

              <button type="button">
                <HeartIcon className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            <button type="button">
              <MenuIcon className="w-6 h-6 md:hidden" />
            </button>

            <Link
              className="focus:outline-none focus:ring-2 ring-black ring-offset-2 rounded-full"
              to={`/profile/${user?.id}`}
            >
              <img
                src={user?.avatar}
                alt={user?.name}
                className="w-8 h-8 rounded-full cursor-pointer"
              />
            </Link>
          </div>
        ) : (
          <button type="button" onClick={signInWithGoogle}>
            Sign In
          </button>
        )}
      </nav>
    </div>
  );
};
