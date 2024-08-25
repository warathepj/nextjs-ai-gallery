// app/favorite/page.jsx

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
  // console.log("favoriteImageIds from favorite/page: ", favoriteImageIds);
  // console.log("type of favoriteImageIds from favorite/page: ", typeof favoriteImageIds);

  // const favoriteImages = images.filter(image => favoriteImageIds.has(image.path));

  return (
    <div>
      <h1>Favorite Images</h1>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 mt-4'>
        {favoriteImageIds.map((imageId, index) => {
          const image = images.find(img => img.path === imageId);
          return (
            <div key={imageId} className="mb-10">
              {image && (
                <Link href={`/category/favorite/image/${imageId}`}>
                  <div key={image.path} className="relative hover:cursor-pointer">
                    <Image
                      src={`${baseUrl}/${imageId}`}
                      alt={imageId}
                      width={500}
                      height={500}
                    />

                    <div
                      className="
                        absolute z-10 bottom-0 left-0 w-full h-full 
                        bg-black opacity-0 hover:opacity-60 transition-opacity 
                        overflow-hidden break-words
                      "
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
    </div>
  );
}
