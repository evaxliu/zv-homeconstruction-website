"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";

export type GalleryImage = {
  id: number;
  src: string;
  alt?: string;
};

type ModalProps = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setCurrentImage: Dispatch<SetStateAction<number>>;
  images: GalleryImage[];
  currentImage: number;
};

export default function Modal({
  setModalOpen,
  setCurrentImage,
  images,
  currentImage,
}: ModalProps) {
  const image = images[currentImage];

  if (!image) {
    return null;
  }

  const showPreviousImage = () => {
    setCurrentImage((previousImage) =>
      previousImage > 0 ? previousImage - 1 : images.length - 1,
    );
  };

  const showNextImage = () => {
    setCurrentImage((previousImage) =>
      previousImage < images.length - 1 ? previousImage + 1 : 0,
    );
  };

  return (
    <section
      className="fixed inset-0 z-50 bg-white"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      onClick={() => setModalOpen(false)}
    >
      <button
        type="button"
        onClick={() => setModalOpen(false)}
        className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center text-black hover:text-gray-500"
        aria-label="Close modal"
      >
        <X className="h-7 w-7" strokeWidth={1.5} />
      </button>

      <div className="grid h-full w-full grid-cols-[3.5rem_minmax(0,1fr)_3.5rem] items-center sm:grid-cols-[6rem_minmax(0,1fr)_6rem] lg:grid-cols-[8rem_minmax(0,1fr)_8rem]">
        {images.length > 1 && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            className="z-10 col-start-1 row-start-1 flex h-12 w-12 items-center justify-center justify-self-center text-black hover:text-gray-500"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" strokeWidth={1.5} />
          </button>
        )}

        <div
          className="relative col-start-2 row-start-1 h-[70vh] w-full max-w-[1100px] justify-self-center sm:h-[min(78vh,760px)]"
          onClick={(event) => event.stopPropagation()}
        >
          <Image
            src={image.src}
            alt={image.alt ?? `Image ${currentImage + 1}`}
            fill
            sizes="(max-width: 640px) calc(100vw - 7rem), (max-width: 1280px) calc(100vw - 12rem), 1100px"
            className="object-contain"
            priority
          />
        </div>

        {images.length > 1 && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            className="z-10 col-start-3 row-start-1 flex h-12 w-12 items-center justify-center justify-self-center text-black hover:text-gray-500"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" strokeWidth={1.5} />
          </button>
        )}
      </div>
    </section>
  );
}