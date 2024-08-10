import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';
import ImageContext from '../context/ImageContext';
import Button from './Button';

const NavBar = () => {
    return (
      <div className='flex flex-wrap justify-around'>
        <Link href="/favorite">
        <Button
          className="bg-red-500 hover:bg-red-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('favorite')}
        >
          Favorite
        </Button>
      </Link>

      {/* when click on app/page.js/ */}
      <Link href="/category/purple">
        <Button
          // go to "/purple"
          className="bg-purple-500 hover:bg-purple-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('purple')}
        >
          Purple
        </Button>
      </Link>

      <Link href="/category/yellow">
        <Button
          className="bg-yellow-500 hover:bg-yellow-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('yellow')}
        >
          Yellow
        </Button>
      </Link>

      <Link href="/green">
        <Button
          className="bg-green-500 hover:bg-green-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('green')}
        >
          Green
        </Button>
      </Link>

      <Link href="/red">
        <Button
          className="bg-red-500 hover:bg-red-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('red')}
        >
          Red
        </Button>
      </Link>

      <Link href="/pink">
        <Button
          className="bg-pink-500 hover:bg-pink-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('pink')}
        >
          Pink
        </Button>
      </Link>
      
      <Link href="/orange">
        <Button
          className="bg-orange-500 hover:bg-orange-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('orange')}
        >
          Orange
        </Button>
      </Link>

      <Link href="/bluesky">
        <Button
          className="bg-sky-500 hover:bg-sky-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('bluesky')}
        >
          Bluesky
        </Button>
      </Link>

      <Link href="/metal">
        <Button
          className="bg-gray-500 hover:bg-gray-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('metal')}
        >
          Metal
        </Button>
      </Link>
      
      <Link href="/city">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('city')}
        >
          City
        </Button>
      </Link>

      
      
      <Link href="/flower">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('flower')}
        >
          Flower
        </Button>
      </Link>
      
      <Link href="/landscape">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('landscape')}
        >
          Landscape
        </Button>
      </Link>

      <Link href="/motorcycle">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('motorcycle')}
        >
          Motorcycle
        </Button>
      </Link>

      <Link href="/space">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('space')}
        >
          Space
        </Button>
      </Link>

      </div>
    );
  };
  
  export default NavBar;