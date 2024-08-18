// app/category/[categoryId]/page.js/
//from app/category/[categoryId]/page.js/ 
// initial render only 2 image.


"use client"
import Link from 'next/link';
import { useRouter } from 'next/router';

import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';
import ImageContext from '../../context/ImageContext';
// import { images, getUniqueTags } from './context/ImageContext';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
import ScrollToTopButton from '../../components/ScrollToTopButton';

export default function CategoryPage({ params }) {
  // const [text, setText] = useState('');
  const { baseUrl, images, getUniqueTags } = useContext(ImageContext);
  console.log("images in [categoryId] : ", images)
  // 12/8 array of all image object
  const uniqueTags = getUniqueTags(images); // tag list
  // from app/page.js/ 
  const [selectedTag, setSelectedTag] = useState(null);
  const param = params.categoryId;
  console.log("params.id in [categoryId] : ", param)
  // 12/8 ok
  const image = images.filter(image => image.tag.includes(param));
  console.log("image in [categoryId] : ", image)
  // 12/8 ok array of object
  const [visiblePictures, setVisiblePictures] = useState(8); // Start by showing 2 pictures

  // set state of selectedTag, setSelectedTag to ./context/ImageContext
  // set state to ImageContext from './context/ImageContext';

  // In app/page.jsx

  function handleTagClick(tag) {
    setSelectedTag(tag);
    setShuffleEnabled(false); // Disable shuffling
  }


  const filteredImages = selectedTag // selectedTag ok
    ? images.filter((image) => image.tag && image.tag.includes(selectedTag))
    : images;

//from app/page.js/
  // const [displayedImages, setDisplayedImages] = useState(shuffle(images, 0));
  const [usedImages, setUsedImages] = useState(new Set());

  const handleLoadMore = () => {
  setVisiblePictures(visiblePictures + 8); 
};


// function shuffle(array, startIndex, usedImages) {
//   const availableIndices = Array.from(Array(array.length).keys()).filter(i => {
//     return usedImages instanceof Set ? !usedImages.has(i) : true; 
//   });
//   const shuffledIndices = availableIndices.sort(() => 0.5 - Math.random());
//   return shuffledIndices.slice(startIndex, startIndex + 2).map(i => array[i]);
// }

  return (
    <div>
      <pre>----------DEBUG start------------</pre>
      <pre>param : {param}</pre>
      <pre>......</pre>
      <pre>
      image line 27:

      {image.map((image, index) => (
        <div key={index}>
          {image.path}
        </div>
      ))}
    </pre>

      <pre>----------DEBUG end------------</pre>
      <div className='grid grid-cols-2 gap-2'>
      {image.slice(0, visiblePictures).map((image) => (
          // <Link key={image.path} href={`category/[categoryId]/image/${image.path}`}>
          <Link key={image.path} href={`/category/${params.categoryId}/image/${image.path}`}> 
          
            <div key={image.path} className="relative hover:cursor-pointer">
              {/* ... image rendering code ... */}
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
                  className="text-xs text-white text-center p-4 w-4/5 h-4/5">{image.prompt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      

      <div class="flex justify-center">
{/* //when click app/category/[categoryId]/page.js/ */}
        <Button
          className="bg-blue-500 hover:bg-blue-300 text-white 
          font-bold mt-6 mb-3 py-2 px-4 rounded-full mx-auto"
          onClick={() => handleLoadMore()}
        >
          Load More
        </Button>
        {/* Load 2 more pictures */}
      </div>

      <div class="flex justify-center">
{/* //when click app/page.js/ */}
        <Button
        // go to top of page
          onClick={() => window.scrollTo(0, 0)}
          className="bg-lime-500 hover:bg-lime-300 text-white 
          font-bold py-2 px-4 rounded-full mx-auto"
        >
          Back To Top
        </Button>
      </div>

      <pre>
        {selectedTag && `Selected tag: ${selectedTag}`}
      </pre>
      <div>
        <h1>Unique Tags</h1>
        <pre>{JSON.stringify(uniqueTags, null, 2)}</pre>
      </div>
      <NavBar />

    </div>
  )
}
