import React from 'react';

import { Link } from 'react-router-dom';

import type { User } from '../../types/User';

type CommentItemProps = {
  user: User;
  message: string;
};

export const CommentItem: React.FC<CommentItemProps> = ({ user, message }) => (
  <span className="text-sm">
    <Link to="/">
      <b className="hover:underline">{user.name}</b>
    </Link>{' '}
    {message}
  </span>
);
