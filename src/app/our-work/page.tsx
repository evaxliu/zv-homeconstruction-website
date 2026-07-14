"use client"

import { useState } from "react";
import ImageCard from "../components/Image-Card"
import Modal, { type GalleryImage } from "../components/Modal";

export default function OurWork() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images: GalleryImage[] = [
    {
      id: 0,
      src: "/bathtub1.avif",
      alt: "Renovated bathtub",
    },
    {
      id: 1,
      src: "/house1.avif",
      alt: "House exterior",
    },
    {
      id: 2,
      src: "/kitchen1.avif",
      alt: "Renovated kitchen",
    },
    {
      id: 3,
      src: "/shower1.avif",
      alt: "Renovated shower",
    },
    {
      id: 4,
      src: "/stair1.avif",
      alt: "Exterior staircase",
    },
    {
      id: 5,
      src: "/toilet1.avif",
      alt: "Renovated bathroom",
    },
  ];
  return(
    <section className="flex flex-col md:flex-row bg-white text-black w-full">
      <article className="flex w-full flex-col text-center items-center gap-5 py-10 md:flex-1 md:justify-center mx-auto max-w-7xl px-6 min-h-[calc(100svh-80px)] md:gap-10 md:items-center font-[gelasio]">
        <div>
          <h2 className="text-5xl">
            Our Work
          </h2>
        </div>
        <div className="flex flex-col justify-center md:flex-row md:flex-wrap gap-10">
          {images.map((image, index) => (
            <button
              type="button"
              key={image.id}
              className="cursor-pointer"
              onClick={() => {
                setModalOpen(true);
                setCurrentImage(index);
              }}
            >
              <ImageCard
                key={image.id}
                title={image.alt ?? "Project image"}
                imageSrc={image.src}
              />
            </button>
          ))}
        </div>
      </article>
      {modalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          setCurrentImage={setCurrentImage}
          images={images}
          currentImage={currentImage}
        />
      )}
    </section>
  )
}