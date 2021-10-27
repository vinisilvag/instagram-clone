import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import type { User } from '../../types/User';

type AsideItemProps = {
  cardForCurrentUser?: boolean;
  user?: User;
};

export const AsideItem: React.FC<AsideItemProps> = ({
  cardForCurrentUser = false,
  user,
}) => {
  const { signOutFromGoogle } = useAuth();

  const handleButtonClick = async () => {
    if (cardForCurrentUser) {
      await signOutFromGoogle();
    } else {
      console.log('Follow User');
    }
  };

  return (
    <div className="w-full flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <Link to={`/profile/${user?.id}`}>
          <img
            src={user?.avatar}
            alt={user?.name}
            className={
              cardForCurrentUser
                ? 'w-11 h-11 rounded-full'
                : 'w-9 h-9 rounded-full'
            }
          />
        </Link>

        <div className="flex flex-col justify-center items-start ml-3">
          <Link to={`/profile/${user?.id}`}>
            <span className="font-medium text-base hover:underline">
              {user?.name}
            </span>
          </Link>

          {!cardForCurrentUser && (
            <span className="text-sm text-gray-400">
              You dont follow this user.
            </span>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={handleButtonClick}
        className="text-blue-600 font-medium text-xs"
      >
        {cardForCurrentUser ? 'Sign Out' : 'Follow'}
      </button>
    </div>
  );
};
