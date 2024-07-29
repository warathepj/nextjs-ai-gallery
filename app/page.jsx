// app/page.js/
// create function handleTagClick in app/page.js/ 
"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';
import ImageContext from './context/ImageContext';
import Button from './components/Button';

export default function Home() {
  const [text, setText] = useState('');
  const { baseUrl, images } = useContext(ImageContext);
  // from app/page.js/ 
  const [selectedTag, setSelectedTag] = useState(null);
  const [shuffleEnabled, setShuffleEnabled] = useState(true);

  // set state of selectedTag, setSelectedTag to ./context/ImageContext
  // set state to ImageContext from './context/ImageContext';

  // In app/page.jsx

  function handleTagClick(tag) {
    setSelectedTag(tag);
    setShuffleEnabled(false); // Disable shuffling
  }


// In app/page.jsx render
const filteredImages = selectedTag // selectedTag ok
  // in p tag
  ? images.filter((image) => image.tag && image.tag.includes(selectedTag))
  : images;
  // THIS CODE OK, LOAD RANDOW ALL IMAGE
  // In app/page.jsx 
function shuffle(array) {
  //when click load more button load next 4 image, first 4 image still exist
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  // return array;
  // Return the first 4 elements of the shuffled array
  // THIS CODE OK, LOAD ONLY 4 IMAGE
  return array.slice(0, 4);
  // THIS CODE OK, LOAD ONLY 4 IMAGE
}
// THIS CODE OK, LOAD RANDOW ALL IMAGE

const [displayedImages, setDisplayedImages] = useState(shuffle(images, 0)); 
const handleLoadMore = () => {
  setDisplayedImages(prevImages => 
    [...prevImages, ...shuffle(images, prevImages.length)]
  );
}

return (
  <div>
    <p>
      {selectedTag && `Selected tag: ${selectedTag}`}
    </p>
    {/* <p>
      {filteredImages.map(image => (
        <span key={image.path}>{image.path} </span>
      ))}
    </p> */}

    <Link href="/insert" style={{ cursor: 'pointer' }}>Go to Insert Page</Link>
    <Link href="https://ce2e-125-25-191-35.ngrok-free.app/" style={{ cursor: 'pointer' }}>Go to local</Link>

    {/* access app/api/hello.js and render text in app/page.js/p tag */}
    <p>apiData</p>
    <h1>text: {text}</h1>

    {/* why app/page.js/ */}
    {/* not render */}
    <h1>Image Gallery</h1>
    <Button
      className="bg-red-500 hover:bg-red-300 text-white 
          font-bold py-2 px-4 rounded-full"
      onClick={() => console.log('Button clicked')}
    >
      Favorite
    </Button>
    {/* when click on app/page.js/ */}
    <Link href="/purple">
    <Button
    // go to "/purple"
      className="bg-purple-500 hover:bg-purple-300 text-white 
          font-bold py-2 px-4 rounded-full"
      onClick={() => handleTagClick('purple')}
    >
      Purple
    </Button>
    </Link>
    <div className='grid grid-cols-2 gap-2'>
      {displayedImages.map((image) => ( 
        <Link key={image.path} href={`/image/${image.path}`}>
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
    {/* render only tag purple, tag is in app/context/ImageContext.js/ */}
    {/* images.tag */}

    {/* THIS CODE LOAD ONLY 4 IMAGE OK */}
    {/* <div className='grid grid-cols-2 gap-2'> */}
      {/* {shuffleEnabled ? shuffle(images).map((image) => ( */}
        {/* // when click app/page.js/ */}
        {/* <Link key={image.path} href={`/${image.path}`}> */}
          {/* <div key={image.path} className="relative hover:cursor-pointer"> */}
{/* ////////////////////////// */}
            {/* go to route app/context/ImageContext.js/images.path */}
            {/* <Image
              src={`${baseUrl}${image.path}`}
              alt={image.prompt}
              width={500}
              height={500}
            /> */}

            {/* <div
              className="absolute z-10 bottom-0 left-0 w-full h-full 
                bg-black opacity-0 hover:opacity-60 transition-opacity 
                overflow-hidden break-words"
            > */}
              {/* <p
                className="text-xs text-white text-center p-4 w-4/5 h-4/5">{image.prompt}</p>
            </div> */}
            {/* ///////////////////////////////// */}
          {/* </div> */}
        {/* </Link> */}

      {/* )) : filteredImages.map((image) => ( */}
        {/* <Link key={image.path} href={`/${image.path}`}> */}
          {/* <div key={image.path} className="relative hover:cursor-pointer"> */}

            {/* go to route app/context/ImageContext.js/images.path */}
            {/* <Image
              src={`${baseUrl}${image.path}`}
              alt={image.prompt}
              width={500}
              height={500}
            /> */}

            {/* <div
              className="absolute z-10 bottom-0 left-0 w-full h-full 
                bg-black opacity-0 hover:opacity-60 transition-opacity 
                overflow-hidden break-words"
            > */}
              {/* <p */}
                {/* className="text-xs text-white text-center p-4 w-4/5 h-4/5">{image.prompt}</p> */}
            {/* </div> */}
          {/* </div> */}
        {/* </Link> */}
      {/* ))} */}

    {/* </div> */}
    {/* THIS CODE LOAD ONLY 4 IMAGE OK */}

    <Button
      className="bg-blue-500 hover:bg-blue-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleLoadMore()}
      
      // onClick={() => console.log('Button clicked')}
    >
      Load More
    </Button>


    {/* <div className='grid grid-cols-2 gap-2'>
        {Object.entries(images).map(([filename, path]) => (
          <div className='relative hover:cursor-pointer'>

            <Image
              key={filename}
              src={`${baseUrl}${path}`}
              alt={filename}
              width={300}
              height={200}

            />
            <div className="absolute z-10 bottom-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-60 transition-opacity">
              <p className="text-white text-center p-4">Your Text Here</p>
            </div>
          </div>
        ))}
      </div> */}

    {/* <div>
        {Object.entries(images).map(([filename, path]) => (
          <Image 
            key={filename}
            src={`${baseUrl}${path}`}
            alt={filename}
            width={300}
            height={200}
            unoptimized
          />
        ))}
      </div> */}
  </div>
)
}
