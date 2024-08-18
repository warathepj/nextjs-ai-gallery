// app/favorite/page.jsx
//loop and render context/FavoriteContext.js/favoriteImageIds in
//  app/favorite/page.jsx/pre tag
"use client";
import { useContext } from 'react';
import ImageContext from '../context/ImageContext';
import FavoriteContext from '../context/FavoriteContext';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../components/NavBar';

export default function Favorite({ params }) {
  const { images, baseUrl } = useContext(ImageContext);
  const { favoriteImageIds } = useContext(FavoriteContext);
  console.log("favoriteImageIds from favorite/page: ", favoriteImageIds);
  // array of path (string)
  console.log("type of favoriteImageIds from favorite/page: ", typeof favoriteImageIds);

  // const favoriteImages = images.filter(image => favoriteImageIds.has(image.path));

  return (
    <div>
      <pre>--------------DEBUG start--------------</pre>
      <div className='grid grid-cols-2 gap-2'>
        {/* {image.map((image) => ( */}
        {/* // <Link key={image.path} href={`category/[categoryId]/image/${image.path}`}> */}

        {/* <div key={image.path} className="relative hover:cursor-pointer"> */}
        {/* ... image rendering code ... */}
        {/* <Image */}
        {/* src={`${baseUrl}${image.path}`} */}
        {/* alt={image.prompt} */}
        {/* width={500} */}
        {/* height={500} */}
        {/* /> */}

        {/* <div */}
        {/* className="absolute z-10 bottom-0 left-0 w-full h-full  */}
        {/* bg-black opacity-0 hover:opacity-60 transition-opacity  */}
        {/* overflow-hidden break-words" */}
        {/* > */}
        {/* <p */}
        {/* className="text-xs text-white text-center p-4 w-4/5 h-4/5">{image.prompt}</p> */}
        {/* </div> */}
        {/* </div> */}
        {/* ))} */}
      </div>
      <pre>favoriteImageIds from favorite/page: {favoriteImageIds}</pre>
      <h1>Favorite Images</h1>
      <div className='grid grid-cols-2 gap-2'>
        {favoriteImageIds.map((imageId, index) => {
  const image = images.find(img => img.path === imageId);
  return (
    <div key={imageId}>
      {image && ( 
        <Link href={`/category/favorite/image/${imageId}`}>
          <pre>image.prompt: {image.prompt}</pre>
          <div key={image.path} className="relative hover:cursor-pointer">
            <Image
              src={`${baseUrl}/${imageId}`}
              alt={imageId}
              width={200}
              height={200}
            />

            <div
              className="absolute z-10 bottom-0 left-0 w-full h-full 
              bg-black opacity-0 hover:opacity-60 transition-opacity 
              overflow-hidden break-words"
            >
              <p
                className="text-xs text-white text-center p-4 w-4/5 h-4/5"
              >{image.prompt}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
})}

      </div>

<NavBar />
      <pre>--------------DEBUG end--------------</pre>

      {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {favoriteImages.map(image => (
          <div key={image.path}>
            <Image
              src={`${baseUrl}/${image.path}`}
              alt={image.prompt}
              width={250}
              height={250}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}
