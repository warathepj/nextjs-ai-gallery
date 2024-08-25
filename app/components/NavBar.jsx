import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';
import ImageContext from '../context/ImageContext';
import Button from './Button';

const NavBar = () => {
  return (
    <div className='flex flex-wrap justify-around'>
      <Link href="/">
        <Button
          className="bg-lime-500 hover:bg-lime-300 text-white 
          font-bold py-2 px-4 rounded-full"
        >
          Home
        </Button>
      </Link>

      <Link href="/favorite">
        <Button
          className="bg-red-500 hover:bg-red-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('favorite')}
        >
          Favorite
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

      <Link href="/category/pink">
        <Button
          className="bg-pink-500 hover:bg-pink-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('pink')}
        >
          Pink
        </Button>
      </Link>

      <Link href="/category/green">
        <Button
          className="bg-green-500 hover:bg-green-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('green')}
        >
          Green
        </Button>
      </Link>

      <Link href="/category/orange">
        <Button
          className="bg-orange-500 hover:bg-orange-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('orange')}
        >
          Orange
        </Button>
      </Link>

      <Link href="/category/bluesky">
        <Button
          className="bg-sky-500 hover:bg-sky-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('bluesky')}
        >
          Bluesky
        </Button>
      </Link>

      <Link href="/category/purple">
        <Button
          className="bg-purple-500 hover:bg-purple-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('purple')}
        >
          Purple
        </Button>
      </Link>

      <Link href="/category/red">
        <Button
          className="bg-red-500 hover:bg-red-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('red')}
        >
          Red
        </Button>
      </Link>

      <Link href="/category/metal">
        <Button
          className="bg-gray-500 hover:bg-gray-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('metal')}
        >
          Metal
        </Button>
      </Link>

      <Link href="/category/animal">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('animal')}
        >
          Animal
        </Button>
      </Link>

      <Link href="/category/beach">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('beach')}
        >
          Beach
        </Button>
      </Link>

      <Link href="/category/cat">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('cat')}
        >
          Cat
        </Button>
      </Link>

      <Link href="/category/city">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('city')}
        >
          City
        </Button>
      </Link>

      <Link href="/category/corgi">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('corgi')}
        >
          Corgi
        </Button>
      </Link>

      <Link href="/category/dinosaur">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('dinosaur')}
        >
          Dinosaur
        </Button>
      </Link>

      <Link href="/category/dog">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('dog')}
        >
          Dog
        </Button>
      </Link>

      

      <Link href="/category/flower">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('flower')}
        >
          Flower
        </Button>
      </Link>

      <Link href="/category/forrest">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('forrest')}
        >
          Forrest
        </Button>
      </Link>

      <Link href="/category/house">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('house')}
        >
          House
        </Button>
      </Link>

      <Link href="/category/landscape">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('landscape')}
        >
          Landscape
        </Button>
      </Link>

      <Link href="/category/motorcycle">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('motorcycle')}
        >
          Motorcycle
        </Button>
      </Link>

      <Link href="/category/rabbit">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('rabbit')}
        >
          Rabbit
        </Button>
      </Link>

      <Link href="/category/space">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('space')}
        >
          Space
        </Button>
      </Link>

      <Link href="/category/squirrel">
        <Button
          className="bg-stone-500 hover:bg-stone-300 text-white 
          font-bold py-2 px-4 rounded-full"
          onClick={() => handleTagClick('squirrel')}
        >
          Squirrel
        </Button>
      </Link>

    </div>
  );
};

export default NavBar;