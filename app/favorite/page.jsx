// app/favorite/page.jsx
//loop and render context/FavoriteContext.js/favoriteImageIds in
//  app/favorite/page.jsx/pre tag
"use client";
import { useContext } from 'react';
import ImageContext from '../context/ImageContext';
import FavoriteContext from '../context/FavoriteContext';
import Image from 'next/image';

export default function Favorite() {
  const { images, baseUrl } = useContext(ImageContext);
  const { favoriteImageIds } = useContext(FavoriteContext);
  console.log("favoriteImageIds from favorite/page: ", favoriteImageIds);
    console.log("type of favoriteImageIds from favorite/page: ", typeof favoriteImageIds);

  // const favoriteImages = images.filter(image => favoriteImageIds.has(image.path));

  return (
    <div>
      <h1>Favorite Images</h1>
      <div className='grid grid-cols-2 gap-2'>
        {favoriteImageIds.map((imageId) => (
          <div key={imageId}>
            {images.find(image => image.path === imageId) && (
              <Image
                src={`${baseUrl}/${imageId}`}
                alt={imageId}
                width={200}
                height={200}
              />
            )}
          </div>
        ))}
      </div>
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
