// app/category/[categoryId]/image/[imageId]/page.js/

"use client";
import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image'

import ImageContext from '../../../../context/ImageContext';
import FavoriteContext from '../../../../context/FavoriteContext';
import Button from '../../../../components/Button';
import FavoriteOutline from '@/app/components/(icon)/FavoriteOutline';
import Favorite from '@/app/components/(icon)/Favorite';


export default function ImagePage({ params }) {
  const { images, baseUrl } = useContext(ImageContext);
  const { favoriteImageIds, addFavorite, removeFavorite } = useContext(FavoriteContext);
  const image = images.find(image => image.path === params.imageId);
  const file = params.imageId;
  // console.log("favoriteImageIds: ", favoriteImageIds);
  // console.log("type of favoriteImageIds: ", typeof favoriteImageIds);

  const isFavorite = favoriteImageIds.includes(params.imageId);
  const favImage = isFavorite ? file : null;
  // console.log("favImage: ", favImage);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(params.imageId);
    } else {
      addFavorite(params.imageId);
    }
  };

  return (
    <div>
      {/* <pre>params.id: {params.imageId}</pre> */}

      {image ? (
        <div class="flex justify-center">
          <Image
            src={`${baseUrl}/${image.path}`} alt={image.prompt}
            width={500}
            height={500}
            className='mb-4'
          />
        </div>
      ) : <p>Image not found</p>}

      {image ? <p>Prompt : {image.prompt}</p> : <p>Image not found</p>}
      
      <div
        onClick={() => toggleFavorite(params.id)}
        className='mt-4 ml-6'
      >
        {isFavorite ? <Favorite /> : <FavoriteOutline />}
      </div>

      <Link href={
        params.categoryId === 'all' ? '/' :
          params.categoryId === 'favorite' ? '/favorite' :
            `/category/${params.categoryId}`
      }>
        <Button
          className="bg-cyan-500 hover:bg-cyan-300 text-white font-bold mt-4 mb-4 ml-6 py-2 px-4 rounded-full">
          Back
        </Button>
      </Link>
    </div>
  );
}
