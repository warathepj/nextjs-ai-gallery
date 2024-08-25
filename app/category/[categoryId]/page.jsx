// app/category/[categoryId]/page.js/

"use client"
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { useState, useEffect, useContext } from 'react';
import ImageContext from '../../context/ImageContext';

import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
import ScrollToTopButton from '../../components/ScrollToTopButton';

export default function CategoryPage({ params }) {
  const { baseUrl, images, getUniqueTags } = useContext(ImageContext);
  // console.log("images in [categoryId] : ", images)
  const uniqueTags = getUniqueTags(images); // tag list
  const [selectedTag, setSelectedTag] = useState(null);
  const param = params.categoryId;
  // console.log("params.id in [categoryId] : ", param)
  const image = images.filter(image => image.tag.includes(param));
  // console.log("image in [categoryId] : ", image)
  const [visiblePictures, setVisiblePictures] = useState(8); // Start by showing 2 pictures

  function handleTagClick(tag) {
    setSelectedTag(tag);
    setShuffleEnabled(false); // Disable shuffling
  }

  const filteredImages = selectedTag
    ? images.filter((image) => image.tag && image.tag.includes(selectedTag))
    : images;

  const [usedImages, setUsedImages] = useState(new Set());

  const handleLoadMore = () => {
    setVisiblePictures(visiblePictures + 8);
  };

  return (
    <div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-2'>
        {image.slice(0, visiblePictures).map((image) => (
          <Link key={image.path} href={`/category/${params.categoryId}/image/${image.path}`}>
            <div key={image.path} className="relative hover:cursor-pointer">
              <Image
                src={`${baseUrl}${image.path}`}
                alt={image.prompt}
                width={500}
                height={500}
              />

              <div
                className="absolute z-10 bottom-0 left-0 w-full h-full 
                bg-black opacity-0 hover:opacity-60 transition-opacity 
                overflow-hidden break-words"
              >
                <p
                  className="text-xs text-white text-center p-4 w-4/5 h-4/5"
                >
                  {image.prompt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div class="flex justify-center">
        <Button
          className="bg-blue-500 hover:bg-blue-300 text-white 
            font-bold mt-6 mb-3 py-2 px-4 rounded-full mx-auto"
          onClick={() => handleLoadMore()}
        >
          Load More
        </Button>
      </div>

      <div class="flex justify-center">
        <Button
          onClick={() => window.scrollTo(0, 0)}
          className="bg-lime-500 hover:bg-lime-300 text-white 
            font-bold mb-5 py-2 px-4 rounded-full mx-auto"
        >
          Back To Top
        </Button>
      </div>

      {/* <pre>
        {selectedTag && `Selected tag: ${selectedTag}`}
      </pre> */}
      {/* <div>
        <h1>Unique Tags</h1>
        <pre>{JSON.stringify(uniqueTags, null, 2)}</pre>
      </div> */}
      <NavBar />
    </div>
  )
}
