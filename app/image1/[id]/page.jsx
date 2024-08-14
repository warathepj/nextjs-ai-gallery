// app/image/[id]/page.js/
// "use client"
//when render app/image/[id]/page.js/, if image not favorite before,
// then initial isFavorite=false


// 
//from app/image/[id]/page.js and context/FavoriteContext.js
// render favorite image in app/favorite/page.jsx
"use client";
import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image'

import ImageContext from '../../context/ImageContext';
import FavoriteContext from '../../context/FavoriteContext';
import Button from '../../components/Button';
import FavoriteOutline from '@/app/components/(icon)/FavoriteOutline';
import Favorite from '@/app/components/(icon)/Favorite';


export default function ImagePage({ params }) {
  const { images, baseUrl } = useContext(ImageContext);
  const { favoriteImageIds, addFavorite, removeFavorite } = useContext(FavoriteContext);
  // const router = useRouter();

  const image = images.find(image => image.path === params.id);
  const file = params.id;
  console.log("favoriteImageIds: ", favoriteImageIds);
  console.log("type of favoriteImageIds: ", typeof favoriteImageIds);

  // set state isFavorite to context/FavoriteContext
  // const isFavorite = favoriteImageIds.has(params.id);
  const isFavorite = favoriteImageIds.includes(params.id);
  // const [isFavorite, setIsFavorite] = useState(false);
//state app/image/[id]/page.js/favImage to array of string in context/FavoriteContext
     const favImage = isFavorite ? file : null; 
 console.log("favImage: ", favImage);

 const toggleFavorite = () => {
  if (isFavorite) {
    removeFavorite(params.id);
  } else {
    addFavorite(params.id);
  }
};

  
  return (
    <div>


      {image ? (
        <>
          <Image
            src={`${baseUrl}/${image.path}`} alt={image.prompt}
            width={500}
            height={500}
            className='mb-4'
          />
          {/* <p>{image.prompt}</p> */}
        </>
      ) : <p>Image not found</p>}

      {image ? <p>Prompt : {image.prompt}</p> : <p>Image not found</p>}
      <Link href="/"> 
  <Button className="bg-cyan-500 hover:bg-cyan-300 text-white font-bold mt-4 py-2 px-4 rounded-full">
    Back
  </Button>
</Link>
    
      <div onClick={() => toggleFavorite(params.id)}>
        {isFavorite ? <Favorite /> : <FavoriteOutline />}
      </div> 
    {/* to <Favorite /> in same position*/}

    <pre>params.id: {params.id}</pre>
    <pre>file: {file}</pre>

    <pre>isFavorite: {isFavorite.toString()}</pre>
    <pre>favImage: {favImage}</pre>

    
    </div>
  );
}
