import React from 'react';

import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
} from '@heroicons/react/outline';

import { Link } from 'react-router-dom';

import { CommentItem } from './CommentItem';

export const PostItem: React.FC = () => (
  <div className="w-full border border-gray-200 shadow-sm rounded-sm">
    <header className="p-4 flex items-center justify-between bg-white border-b border-gray-200">
      <div className="flex flex-row items-center justify-center">
        <Link to="/">
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14GjehAEuqshoIX-p0OD95q_S08BK6-m978QBhvrO8g=s96-c"
            alt="Vinicius Gomes"
            className="w-8 h-8 rounded-full"
          />
        </Link>

        <Link to="/">
          <span className="font-medium hover:underline ml-4">vinisilvag</span>
        </Link>
      </div>

      <button type="button">
        <DotsHorizontalIcon className="w-5 h-5 text-gray-500" />
      </button>
    </header>

    <img
      src="https://i.ytimg.com/vi/oMyL7irRm-g/maxresdefault.jpg"
      alt="vinisilvag"
      className="w-full bg-cover"
    />

    <div className="px-4 py-3 bg-white">
      <section className="flex flex-row gap-2">
        <button type="button">
          <HeartIcon className="w-7 h-7 text-gray-700" />
        </button>

        <button type="button">
          <ChatIcon className="w-7 h-7 text-gray-700" />
        </button>
      </section>

      <div className="flex flex-col justify-center items-start gap-1 mt-2">
        <span className="text-sm font-bold">12312 likes</span>

        <CommentItem
          user={{
            id: 'test',
            name: 'test',
            email: 'test',
            avatar: 'test',
          }}
          message="legenda"
        />
      </div>

      <section className="mt-2 flex flex-col">
        <CommentItem
          user={{
            id: 'test',
            name: 'test',
            email: 'test',
            avatar: 'test',
          }}
          message="comentário"
        />

        <CommentItem
          user={{
            id: 'test',
            name: 'test',
            email: 'test',
            avatar: 'test',
          }}
          message="comentário"
        />

        <CommentItem
          user={{
            id: 'test',
            name: 'test',
            email: 'test',
            avatar: 'test',
          }}
          message="comentário"
        />
      </section>
    </div>

    <div className="border-t border-gray-200 bg-white">
      <form className="flex flex-row items-center">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full h-12 px-4"
        />

        <button type="submit" className="text-blue-600 font-medium px-4">
          Post
        </button>
      </form>
    </div>
  </div>
);
