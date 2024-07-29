// app/image/[id]/page.js/
// "use client"
// from app/context/ImageContext.js/ render image
// that path === params.id


// app/[id]/page.js
"use client";
import { useContext, useState } from 'react';
import ImageContext from '../../context/ImageContext';
import Image from 'next/image'
import Button from '../../components/Button';
import FavoriteOutline from '@/app/components/(icon)/FavoriteOutline';
import Favorite from '@/app/components/(icon)/Favorite';


export default function Home({ params }) {
  const { images, baseUrl } = useContext(ImageContext);
  const image = images.find(image => image.path === params.id);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div>
      <p>params.id: {params.id}</p>

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
      <Button
      className="bg-cyan-500 hover:bg-cyan-300 text-white 
          font-bold mt-4 py-2 px-4 rounded-full"
          // onClick={() => handleLoadMore()}
      
      // onClick={() => console.log('Button clicked')}
    >
      Back
    </Button>
    {/* //toggle app/image/[id]/page.js/ */}
    <div onClick={toggleFavorite} style={{ cursor: 'pointer' }}> 
        {isFavorite ? <Favorite /> : <FavoriteOutline />}
      </div> 
    {/* to <Favorite /> in same position*/}

    </div>
  );
}
