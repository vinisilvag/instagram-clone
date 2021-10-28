/* eslint-disable consistent-return */
import React, { ChangeEvent, useRef, useState, useEffect } from 'react';

import { Dialog } from '@headlessui/react';
import { CameraIcon } from '@heroicons/react/outline';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, arrayUnion } from 'firebase/firestore';
import { db, storage } from '../services/firebase';

import { useModal } from '../hooks/useModal';
import { useAuth } from '../hooks/useAuth';

type CreatePostFormData = {
  caption: string;
};

const createPostFormSchema = yup.object().shape({
  caption: yup.string().required(),
});

export const Modal: React.FC = () => {
  const { user } = useAuth();
  const { modalIsOpen, handleCloseModal } = useModal();

  const filePickerRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreatePostFormData>({
    resolver: yupResolver(createPostFormSchema),
  });

  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const addImageToPost = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;

    if (!fileList) {
      setSelectedFile(null);
      return;
    }

    setSelectedFile(fileList[0]);
  };

  const handleCreatePost: SubmitHandler<CreatePostFormData> = async ({
    caption,
  }) => {
    if (!selectedFile) return;

    try {
      const storageRef = ref(storage, `/posts/${Date.now()}`);

      await uploadBytes(storageRef, selectedFile);

      const imageUrl = await getDownloadURL(storageRef);

      await setDoc(
        doc(db, 'posts', user?.id as string),
        {
          posts: arrayUnion({
            photoUrl: imageUrl,
            caption,
            likes: [],
            comments: [],
            createdAt: new Date(),
          }),
          user: {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            avatar: user?.avatar,
          },
        },
        { merge: true },
      );

      handleCloseModal();
    } catch (err) {
      console.log(err);
    }
  };

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
            {preview ? (
              <button
                type="button"
                onClick={() => filePickerRef.current?.click()}
                className="w-full mb-4"
              >
                <img src={preview} alt="?" className="w-full h-56 rounded" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => filePickerRef.current?.click()}
                className="w-full h-56 rounded border border-dashed bg-gray-50 mb-4 flex items-center justify-center cursor-pointer"
              >
                <CameraIcon className="w-12 h-12 text-gray-300" />
              </button>
            )}

            <input
              type="file"
              ref={filePickerRef}
              hidden
              onChange={addImageToPost}
            />

            <form
              className="flex flex-col gap-3"
              onSubmit={handleSubmit(handleCreatePost)}
            >
              <input
                type="text"
                placeholder="Post caption..."
                {...register('caption')}
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />

              {errors.caption && (
                <span className="text-sm text-red-600 -mt-2">
                  {errors.caption.message}
                </span>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-10 rounded bg-blue-500 hover:bg-blue-600 text-white font-medium outline-none focus:ring-2 ring-blue-500 ring-offset-2"
              >
                {isSubmitting ? 'Posting...' : 'Upload Post'}
              </button>
            </form>
          </section>
        </div>
      </div>
    </Dialog>
  );
};
