// Create a new file named ImageContext.js in the app directory
// app/context/ImageContext.js/
// from app/context/ImageContext.js/ render images.prompt 
// that path === 
"use client"
import { createContext, useState } from 'react';

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  
  const baseUrl = 'https://warathepj.github.io/js-ai-gallery/public/image/';
  // const images = {
  //   'fri9.jpeg': 'fri9.jpeg',
  //   'fri10.jpeg': 'fri10.jpeg',
  //   'fri11.jpeg': 'fri11.jpeg',
  //   'fri12.jpeg': 'fri12.jpeg',
  //   'fri13.jpeg': 'fri13.jpeg',
  // };
// app/context/ImageContext.js/images.path
  const images = [
    
    {
      path: '026.jpg',
      prompt: "Depicts a CNC milling machine in the process of machining a metal workpiece. A cutting tool is visible, rotating and removing material from the workpiece. Coolant is being sprayed onto the cutting area to manage heat and improve the machining process. The overall scene is characterized by industrial precision and efficiency.",
      tag: ['metal', 'industrial']
    },
    {
      path: '025.jpg',
      prompt: "Depicts a CNC milling machine in the process of machining a metal workpiece. A cutting tool is visible, rotating and removing material from the workpiece. Coolant is being sprayed onto the cutting area to manage heat and improve the machining process. The overall scene is characterized by industrial precision and efficiency.",
      tag: ['metal', 'industrial']
    },
    {
      path: '024.jpg',
      prompt: "Depicts a CNC milling machine in the process of machining a metal workpiece. A cutting tool is visible, rotating and removing material from the workpiece. Coolant is being sprayed onto the cutting area to manage heat and improve the machining process. The overall scene is characterized by industrial precision and efficiency.",
      tag: ['metal', 'industrial']
    },
    {
      path: '023.jpg',
      prompt: "Depicts a CNC milling machine in the process of machining a metal workpiece. A cutting tool is visible, rotating and removing material from the workpiece. Coolant is being sprayed onto the cutting area to manage heat and improve the machining process. The overall scene is characterized by industrial precision and efficiency.",
      tag: ['metal', 'industrial']
    },
    {
      path: '022.jpg',
      prompt: "Japanese-style landscape painting with a large, golden moon dominating the sky.Silhouetted mountains and a lone tree in the foreground.Calm water reflecting the moon's light.Minimalist color palette of black, white, and gold.Ink wash painting style.",
      tag: ['yellow', 'landscape']
    },
    {
      path: '021.jpg',
      prompt: "Japanese-style landscape painting with a large, golden moon dominating the sky.Silhouetted mountains and a lone tree in the foreground.Calm water reflecting the moon's light.Minimalist color palette of black, white, and gold.Ink wash painting style.",
      tag: ['yellow', 'landscape']
    },
    {
      path: '020.jpg',
      prompt: "Japanese-style landscape painting with a large, golden moon dominating the sky.Silhouetted mountains and a lone tree in the foreground.Calm water reflecting the moon's light.Minimalist color palette of black, white, and gold.Ink wash painting style.",
      tag: ['yellow', 'landscape']
    },
    {
      path: '019.jpg',
      prompt: "Japanese-style landscape painting with a large, golden moon dominating the sky.Silhouetted mountains and a lone tree in the foreground.Calm water reflecting the moon's light.Minimalist color palette of black, white, and gold.Ink wash painting style.",
      tag: ['yellow', 'landscape']
    },
    {
      path: '018.jpg',
      prompt: "Vibrant pink sunset over a vast field of pink flowers.",
      tag: ['pink', 'flower', 'landscape']
    },
    {
      path: '017.jpg',
      prompt: "Vibrant pink sunset over a vast field of pink flowers.",
      tag: ['pink', 'flower', 'landscape']
    },
    {
      path: '016.jpg',
      prompt: "Vibrant pink sunset over a vast field of pink flowers.",
      tag: ['pink', 'flower', 'landscape']
    },
    {
      path: '015.jpg',
      prompt: "Vibrant pink sunset over a vast field of pink flowers.",
      tag: ['pink', 'flower', 'landscape']
    },
    {
      path: '014.jpg',
      prompt: "A Martian landscape at sunset, with a red sky and a lone explorer silhouetted against the horizon.",
      tag: ['orange', 'space']
    },
    {
      path: '013.jpg',
      prompt: "A Martian landscape at sunset, with a red sky and a lone explorer silhouetted against the horizon.",
      tag: ['orange', 'space']
    },
    {
      path: '012.jpg',
      prompt: 'Cyberpunk megacity, towering skyscrapers with purple neon lights, intricate details, digital art style, concept art, trending on Artstation.',
      tag: ['purple', 'city']
    },
    {
      path: '011.jpg',
      prompt: 'Cyberpunk megacity, towering skyscrapers with purple neon lights, intricate details, digital art style, concept art, trending on Artstation.',
      tag: ['purple', 'city']
    },
    {
      path: '010.jpg',
      prompt: 'Cyberpunk megacity, towering skyscrapers with purple neon lights, intricate details, digital art style, concept art, trending on Artstation.',
      tag: ['purple', 'city']
    },
    {
      path: '009.jpg',
      prompt: 'Cyberpunk megacity, towering skyscrapers with purple neon lights, intricate details, digital art style, concept art, trending on Artstation.',
      tag: ['purple', 'city']
    },
    {
      path: '008.jpg',
      prompt: 'A neon-lit cyberpunk cityscape at night, with rain reflecting on the wet pavement. The buildings are tall and densely packed, with a variety of architectural styles. There are a few people walking around, and some vehicles parked on the side of the street.',
      tag: ['purple', 'city']
    },
    {
      path: '007.jpg',
      prompt: 'A neon-lit cyberpunk cityscape at night, with rain reflecting on the wet pavement. The buildings are tall and densely packed, with a variety of architectural styles. There are a few people walking around, and some vehicles parked on the side of the street.',
      tag: ['purple', 'city']
    },
    {
      path: '006.jpg',
      prompt: 'A neon-lit cyberpunk cityscape at night, with rain reflecting on the wet pavement. The buildings are tall and densely packed, with a variety of architectural styles. There are a few people walking around, and some vehicles parked on the side of the street.',
      tag: ['purple', 'city']
    },
    {
      path: '005.jpg',
      prompt: 'A neon-lit cyberpunk cityscape at night, with rain reflecting on the wet pavement. The buildings are tall and densely packed, with a variety of architectural styles. There are a few people walking around, and some vehicles parked on the side of the street.',
      tag: ['purple', 'city']
    },
    {
      path: '004.jpg',
      prompt: 'A sleek, red and white motorcycle with a black background.',
      tag: ['red', 'motorcycle']

    },
    {
      path: '003.jpg',
      prompt: 'A sleek, red and white motorcycle with a black background.',
      tag: ['red', 'motorcycle']

    },
    {
      path: '002.jpg',
      prompt: 'A sleek, red and white motorcycle with a black background.',
      tag: ['red', 'motorcycle']

    },
    {
      path: '001.jpg',
      prompt: 'A sleek, red and white motorcycle with a black background.',
      tag: ['red', 'motorcycle']
    },
    {
      path: 'fri9.jpeg',
      prompt: 'adffsdf',
      tag: ['bluesky', 'animal', 'dog', 'beach']
    },
    {
      path: 'fri10.jpeg',
      prompt: 'ad888888',
      tag: []
    },
    {
      path: 'fri11.jpeg',
      prompt: 'ad888888',
      tag: []

    },
    {
      path: 'fri12.jpeg',
      prompt: 'ad888888',
      tag: []

    },
    {
      path: 'fri13.jpeg',
      prompt: 'ad888888',
      tag: []

    }
  ];
// map and render image, render prompt in p tag of app/page.js/
  return (
    <ImageContext.Provider value={{ baseUrl, images }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContext;
