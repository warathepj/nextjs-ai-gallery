// app/page.js/
//from app/page.js/, which code is about limit render
// image to 6
"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';
import ImageContext from './context/ImageContext';
// import { images, getUniqueTags } from './context/ImageContext';
import Button from './components/Button';
import NavBar from './components/NavBar';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function Home() {
  const [text, setText] = useState('');
  const { baseUrl, images, getUniqueTags } = useContext(ImageContext);
  const uniqueTags = getUniqueTags(images);
  // from app/page.js/ 
  const [selectedTag, setSelectedTag] = useState(null);
  const [shuffleEnabled, setShuffleEnabled] = useState(true);

  

  function handleTagClick(tag) {
    setSelectedTag(tag);
    setShuffleEnabled(false); // Disable shuffling
  }


  const filteredImages = selectedTag // selectedTag ok
    ? images.filter((image) => image.tag && image.tag.includes(selectedTag))
    : images;
  // THIS CODE OK, LOAD RANDOW ALL IMAGE
  // In app/page.jsx 
  // function shuffle(array) {
  //   //when click load more button load next 4 image, first 4 image still exist
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }

  //   // THIS CODE OK, LOAD ONLY 4 IMAGE
  //   return array.slice(0, 6);
  //   // THIS CODE OK, LOAD ONLY 4 IMAGE
  // }
  // THIS CODE OK, LOAD RANDOW ALL IMAGE

//from app/page.js/
  const [displayedImages, setDisplayedImages] = useState(shuffle(images, 0));
  const [usedImages, setUsedImages] = useState(new Set());

  const handleLoadMore = () => {
  const newImages = shuffle(images, displayedImages.length);
  setDisplayedImages(prevImages => [...prevImages, ...newImages]);
  newImages.forEach(img => setUsedImages(prevUsed => new Set([...prevUsed, images.indexOf(img)])));
}

function shuffle(array, startIndex, usedImages) {
  const availableIndices = Array.from(Array(array.length).keys()).filter(i => {
    return usedImages instanceof Set ? !usedImages.has(i) : true; 
  });
  const shuffledIndices = availableIndices.sort(() => 0.5 - Math.random());
  return shuffledIndices.slice(startIndex, startIndex + 8).map(i => array[i]);
}

  return (
    <div>
      
      <div className='grid grid-cols-2 gap-2'>
        {displayedImages.map((image) => (
          // <Link key={image.path} href={`/image/${image.path}`}>
          <Link key={image.path} href={`category/all/image/${image.path}`}>
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
        <Button
          className="bg-blue-500 hover:bg-blue-300 text-white 
          font-bold mt-6 mb-3 py-2 px-4 rounded-full mx-auto"
          onClick={() => handleLoadMore()}
        >
          Load More
        </Button>
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
