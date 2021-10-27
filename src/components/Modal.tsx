import React from 'react';

import { Dialog } from '@headlessui/react';
import { CameraIcon } from '@heroicons/react/outline';
import { useModal } from '../hooks/useModal';

export const Modal: React.FC = () => {
  const { modalIsOpen, handleCloseModal } = useModal();

  return (
    <Dialog
      open={modalIsOpen}
      onClose={handleCloseModal}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />

        <div className="relative bg-white rounded mx-auto w-96">
          <div className="py-3 border-b">
            <Dialog.Title className="font-medium text-center">
              Create new post
            </Dialog.Title>
          </div>

          <section className="p-4">
            <div className="w-full h-56 rounded border border-dashed bg-gray-50 mb-4 flex items-center justify-center cursor-pointer">
              <CameraIcon className="w-12 h-12 text-gray-300" />
            </div>

            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Post caption..."
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />
              <button
                type="button"
                className="w-full h-10 rounded bg-blue-500 hover:bg-blue-600 text-white font-medium outline-none focus:ring-2 ring-blue-500 ring-offset-2"
              >
                Upload Post
              </button>
            </form>
          </section>
        </div>
      </div>
    </Dialog>
  );
};
