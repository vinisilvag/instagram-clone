import React from 'react';

import { useAuth } from '../../hooks/useAuth';

import { PostItem } from './PostItem';
import { AsideItem } from './AsideItem';

export const Feed: React.FC = () => {
  const { user } = useAuth();

  return (
    <section className="px-4 lg:px-0 pb-8">
      <section className="flex flex-row max-w-5xl m-auto mt-6">
        <main className="flex flex-1 flex-col gap-4">
          <PostItem />
          <PostItem />
          <PostItem />
        </main>

        <section className="w-80 ml-6 hidden md:flex flex-col">
          <AsideItem cardForCurrentUser user={user} />

          <span className="font-medium text-gray-400 mt-6">
            Suggestions For You
          </span>

          <div className="mt-4 flex flex-col gap-3">
            <AsideItem user={user} />
            <AsideItem user={user} />
            <AsideItem user={user} />
          </div>
        </section>
      </section>
    </section>
  );
};
