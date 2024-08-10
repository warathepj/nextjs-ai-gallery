// app/[id]/page.jsx/

"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';
import ImageContext from '../../context/ImageContext';
import Button from '../../components/Button';

const TagPage = ({ params }) => {
  const [shuffleEnabled, setShuffleEnabled] = useState(true);
  const { baseUrl, images } = useContext(ImageContext);
  console.log("images in [categoryId] : ", images) // 10/8 array of object (all image)
  const image = images.filter(image => image.tag.includes(params.categoryId));
  // render path of each image in pre tag,
  // ImageContext is from 'app/context/ImageContext', how to code?

  console.log("image in [id] : ", image) // array of object
  // [{path:"019.jpg", prompt:"old.Ink wash painting style.",
// tag:['yellow', 'landscape']}, {...}]

  // const filteredImages = selectedTag // selectedTag ok
  // in p tag
  // ? images.filter((image) => image.tag && image.tag.includes(selectedTag))
  // : images;

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

  const [displayedImages, setDisplayedImages] = useState(shuffle(images, 0));
  const handleLoadMore = () => {
    setDisplayedImages(prevImages =>
      [...prevImages, ...shuffle(images, prevImages.length)]
    );
  }

  return (
    <>
      <div>
        <pre>params.categoryId : {params.categoryId}</pre>

        {/* <div>
          {image.map((img, index) => (
            <pre key={index}>{img.path}</pre>
          ))}
        </div> */}

{/* <h3 
    className="text-center text-2xl font-bold mb-4"
>{params.id.charAt(0).toUpperCase() + params.id.slice(1)}</h3> */}


        <div className='grid grid-cols-2 gap-2'>
          {image.map((img, index) => (
            <Link key={image.path} href={`/category/${params.categoryId}/image/${img.path}`}>

            <div key={index} className="relative hover:cursor-pointer">
              {/* <pre>"img.path", {img.path}</pre> */}
              {/* <pre>"img.path", {`/image/${img.path}`}</pre> */}
              <img
                src={`${baseUrl}/${img.path}`}
                alt={img.prompt || `Image ${index}`}
                width={500} // Adjust width as needed
                height={500} // Adjust height as needed
              />
              <div
                  className="absolute z-10 bottom-0 left-0 w-full h-full 
                bg-black opacity-0 hover:opacity-60 transition-opacity 
                overflow-hidden break-words"
                >
                  <p
                    className="text-xs text-white text-center p-4 w-4/5 h-4/5">{img.prompt}</p>
                </div>
            </div>
            </Link>

          ))}
        </div>

      </div>


        {/* FOR COPY TAILWIND */}
        
        <div class="flex justify-center">
        <Button
          className="bg-blue-500 hover:bg-blue-300 text-white 
          font-bold mt-6 mb-3 py-2 px-4 rounded-full mx-auto"
          onClick={() => handleLoadMore()}
        >
          Load More
        </Button>
      </div>
    </>
  );
};

export default TagPage;
