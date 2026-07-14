"use client";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      onClick={() => setModalOpen(false)}
    >
      <div
        className="relative w-full max-w-5xl rounded-lg bg-white p-4 sm:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setModalOpen(false)}
          className="absolute top-2 right-4 z-20 cursor-pointer text-4xl text-black hover:text-gray-600"
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="relative mt-8">
          <div className="relative mx-auto h-[65vh] w-full sm:h-[75vh]">
            <Image
              src={image.src}
              alt={image.alt ?? `Image ${currentImage + 1}`}
              fill
              sizes="(max-width: 640px) 90vw, 1024px"
              className="object-contain"
              priority
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                className="absolute top-1/2 left-2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 px-3 pb-2 text-4xl text-white hover:bg-black/70"
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={showNextImage}
                className="absolute top-1/2 right-2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 px-3 pb-2 text-4xl text-white hover:bg-black/70"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {images.map((galleryImage, index) => (
              <button
                type="button"
                key={galleryImage.id}
                onClick={() => setCurrentImage(index)}
                className={`h-3 w-3 cursor-pointer rounded-full ${
                  currentImage === index ? "bg-black" : "bg-gray-300"
                }`}
                aria-label={`View image ${index + 1}`}
                aria-current={currentImage === index ? "true" : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}