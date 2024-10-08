// app/context/ImageContext.js/
"use client"
import { createContext, useState, useEffect } from 'react';

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {

  const baseUrl = 'https://warathepj.github.io/js-ai-gallery/public/image/';
  const images = [
    {
      path: '080.jpg',
      prompt: "A squirrel dressed in ancient warrior attire, holding a bow, stands on a cliff looking down below.",
      tag: ["animal", "squirrel"]
    },
    {
      path: '079.jpg',
      prompt: "A squirrel dressed in ancient warrior attire, holding a bow, stands on a cliff looking down below.",
      tag: ["animal", "squirrel"]
    },
    {
      path: '078.jpg',
      prompt: "A squirrel dressed in ancient warrior attire, holding a bow, stands on a cliff looking down below.",
      tag: ["animal", "squirrel"]
    },
    {
      path: '077.jpg',
      prompt: "A squirrel dressed in ancient warrior attire, holding a bow, stands on a cliff looking down below.",
      tag: ["animal", "squirrel"]
    },
    {
      path: '076.jpg',
      prompt: "A vibrant synthwave landscape with a large, glowing pink and orange sun setting behind a majestic mountain peak. The sky is filled with neon pink and blue clouds, and the foreground features a tranquil lake reflecting the colorful sunset. The overall atmosphere is dreamy and nostalgic, reminiscent of the 1980s.",
      tag: ["pink", "landscape"]
    },
    {
      path: '075.jpg',
      prompt: "A vibrant synthwave landscape with a large, glowing pink and orange sun setting behind a majestic mountain peak. The sky is filled with neon pink and blue clouds, and the foreground features a tranquil lake reflecting the colorful sunset. The overall atmosphere is dreamy and nostalgic, reminiscent of the 1980s.",
      tag: ["pink", "landscape"]
    },
    {
      path: '074.jpg',
      prompt: "A vibrant synthwave landscape with a large, glowing pink and orange sun setting behind a majestic mountain peak. The sky is filled with neon pink and blue clouds, and the foreground features a tranquil lake reflecting the colorful sunset. The overall atmosphere is dreamy and nostalgic, reminiscent of the 1980s.",
      tag: ["pink", "landscape"]
    },
    {
      path: '073.jpg',
      prompt: "A vibrant synthwave landscape with a large, glowing pink and orange sun setting behind a majestic mountain peak. The sky is filled with neon pink and blue clouds, and the foreground features a tranquil lake reflecting the colorful sunset. The overall atmosphere is dreamy and nostalgic, reminiscent of the 1980s.",
      tag: ["pink", "landscape"]
    },
    {
      path: '072.jpg',
      prompt: "A cute cat holding a purple flower.",
      tag: ['purple', 'animal', 'cat']
    },
    {
      path: '071.jpg',
      prompt: "A cute cat holding a purple flower.",
      tag: ['purple', 'animal', 'cat']
    },
    {
      path: '070.jpg',
      prompt: "A cute cat holding a purple flower.",
      tag: ['purple', 'animal', 'cat']
    },
    {
      path: '069.jpg',
      prompt: "A cute cat holding a purple flower.",
      tag: ['purple', 'animal', 'cat']
    },
    {
      path: '068.jpg',
      prompt: "An orange house in the middle of a meadow.",
      tag: ['orange', 'house', 'landscape']
    },
    {
      path: '067.jpg',
      prompt: "An orange house in the middle of a meadow.",
      tag: ['orange', 'house', 'landscape']
    },
    {
      path: '066.jpg',
      prompt: "An orange house in the middle of a meadow.",
      tag: ['orange', 'house', 'landscape']
    },
    {
      path: '065.jpg',
      prompt: "An orange house in the middle of a meadow.",
      tag: ['orange', 'house', 'landscape']
    },
    {
      path: '064.jpg',
      prompt: "A Jurassic jungle with dinosaurs walking around.",
      tag: ['green', 'dinosaur', 'forrest']
    },
    {
      path: '063.jpg',
      prompt: "A Jurassic jungle with dinosaurs walking around.",
      tag: ['green', 'dinosaur', 'forrest']
    },
    {
      path: '062.jpg',
      prompt: "A Jurassic jungle with dinosaurs walking around.",
      tag: ['green', 'dinosaur', 'forrest']
    },
    {
      path: '061.jpg',
      prompt: "A Jurassic jungle with dinosaurs walking around.",
      tag: ['green', 'dinosaur', 'forrest']
    },
    {
      path: '060.jpg',
      prompt: "A stunning night sky scene with Mount Fuji as the focal point.Include the Milky Way stretching across the sky.Use a deep blue sky with twinkling stars.Add a touch of purple and pink hues for a dreamy atmosphere.Capture the silhouette of the mountain against the vibrant night sky.Consider reflecting the scene in a calm lake for added depth.Style:Dramatic and awe-inspiringHigh contrast between light and dark",
      tag: ['purple', 'landscape']
    },
    {
      path: '059.jpg',
      prompt: "A stunning night sky scene with Mount Fuji as the focal point.Include the Milky Way stretching across the sky.Use a deep blue sky with twinkling stars.Add a touch of purple and pink hues for a dreamy atmosphere.Capture the silhouette of the mountain against the vibrant night sky.Consider reflecting the scene in a calm lake for added depth.Style:Dramatic and awe-inspiringHigh contrast between light and dark",
      tag: ['purple', 'landscape']
    },
    {
      path: '058.jpg',
      prompt: "A stunning night sky scene with Mount Fuji as the focal point.Include the Milky Way stretching across the sky.Use a deep blue sky with twinkling stars.Add a touch of purple and pink hues for a dreamy atmosphere.Capture the silhouette of the mountain against the vibrant night sky.Consider reflecting the scene in a calm lake for added depth.Style:Dramatic and awe-inspiringHigh contrast between light and dark",
      tag: ['purple', 'landscape']
    },
    {
      path: '057.jpg',
      prompt: "A stunning night sky scene with Mount Fuji as the focal point.Include the Milky Way stretching across the sky.Use a deep blue sky with twinkling stars.Add a touch of purple and pink hues for a dreamy atmosphere.Capture the silhouette of the mountain against the vibrant night sky.Consider reflecting the scene in a calm lake for added depth.Style:Dramatic and awe-inspiringHigh contrast between light and dark",
      tag: ['purple', 'landscape']
    },
    {
      path: '056.jpg',
      prompt: "A serene, dreamlike landscape featuring a snow-capped mountain range reflected in a calm, turquoise lake. Pink wildflowers bloom on the lakeshore, contrasting against the rocky terrain. A crescent moon hangs in a clear, blue sky.",
      tag: ['bluesky', 'landscape']
    },
    {
      path: '055.jpg',
      prompt: "A serene, dreamlike landscape featuring a snow-capped mountain range reflected in a calm, turquoise lake. Pink wildflowers bloom on the lakeshore, contrasting against the rocky terrain. A crescent moon hangs in a clear, blue sky.",
      tag: ['bluesky', 'landscape']
    },
    {
      path: '054.jpg',
      prompt: "A serene, dreamlike landscape featuring a snow-capped mountain range reflected in a calm, turquoise lake. Pink wildflowers bloom on the lakeshore, contrasting against the rocky terrain. A crescent moon hangs in a clear, blue sky.",
      tag: ['bluesky', 'landscape']
    },
    {
      path: '053.jpg',
      prompt: "A serene, dreamlike landscape featuring a snow-capped mountain range reflected in a calm, turquoise lake. Pink wildflowers bloom on the lakeshore, contrasting against the rocky terrain. A crescent moon hangs in a clear, blue sky.",
      tag: ['bluesky', 'landscape']
    },
    {
      path: '052.jpg',
      prompt: "A cute rabbit with orange",
      tag: ['animal', 'rabbit', 'orange']
    },
    {
      path: '051.jpg',
      prompt: "A cute rabbit with orange",
      tag: ['animal', 'rabbit', 'orange']
    },
    {
      path: '050.jpg',
      prompt: "A cute rabbit with orange",
      tag: ['animal', 'rabbit', 'orange']
    },
    {
      path: '049.jpg',
      prompt: "A cute rabbit with orange",
      tag: ['animal', 'rabbit', 'orange']
    },
    {
      path: '048.jpg',
      prompt: "A large, full moon. The moon is prominently displayed in the center of the image and takes up a significant portion of the sky. It has a bright, white glow and appears to be full.A silhouetted cherry blossom tree. A silhouetted tree with delicate branches is visible in the foreground of the image. The tree is partially obscured by the moon but appears to be in bloom.Reddish Mount Fuji. A majestic mountain with a reddish hue is visible in the background of the image. The mountain is partially obscured by the moon but appears to be tall and imposing.Calm, serene, and peaceful atmosphere: The overall atmosphere of the image is calm, serene, and peaceful. The soft lighting and gentle colors contribute to this feeling.Slightly mystical or ethereal. The image has a slightly mystical or ethereal quality, perhaps due to the prominence of the moon and the silhouetted cherry blossom tree.",
      tag: ['pink', 'landscape']
    },
    {
      path: '047.jpg',
      prompt: "A large, full moon. The moon is prominently displayed in the center of the image and takes up a significant portion of the sky. It has a bright, white glow and appears to be full.A silhouetted cherry blossom tree. A silhouetted tree with delicate branches is visible in the foreground of the image. The tree is partially obscured by the moon but appears to be in bloom.Reddish Mount Fuji. A majestic mountain with a reddish hue is visible in the background of the image. The mountain is partially obscured by the moon but appears to be tall and imposing.Calm, serene, and peaceful atmosphere: The overall atmosphere of the image is calm, serene, and peaceful. The soft lighting and gentle colors contribute to this feeling.Slightly mystical or ethereal. The image has a slightly mystical or ethereal quality, perhaps due to the prominence of the moon and the silhouetted cherry blossom tree.",
      tag: ['pink', 'landscape']
    },
    {
      path: '046.jpg',
      prompt: "A large, full moon. The moon is prominently displayed in the center of the image and takes up a significant portion of the sky. It has a bright, white glow and appears to be full.A silhouetted cherry blossom tree. A silhouetted tree with delicate branches is visible in the foreground of the image. The tree is partially obscured by the moon but appears to be in bloom.Reddish Mount Fuji. A majestic mountain with a reddish hue is visible in the background of the image. The mountain is partially obscured by the moon but appears to be tall and imposing.Calm, serene, and peaceful atmosphere: The overall atmosphere of the image is calm, serene, and peaceful. The soft lighting and gentle colors contribute to this feeling.Slightly mystical or ethereal. The image has a slightly mystical or ethereal quality, perhaps due to the prominence of the moon and the silhouetted cherry blossom tree.",
      tag: ['pink', 'landscape']
    },
    {
      path: '045.jpg',
      prompt: "A large, full moon. The moon is prominently displayed in the center of the image and takes up a significant portion of the sky. It has a bright, white glow and appears to be full.A silhouetted cherry blossom tree. A silhouetted tree with delicate branches is visible in the foreground of the image. The tree is partially obscured by the moon but appears to be in bloom.Reddish Mount Fuji. A majestic mountain with a reddish hue is visible in the background of the image. The mountain is partially obscured by the moon but appears to be tall and imposing.Calm, serene, and peaceful atmosphere: The overall atmosphere of the image is calm, serene, and peaceful. The soft lighting and gentle colors contribute to this feeling.Slightly mystical or ethereal. The image has a slightly mystical or ethereal quality, perhaps due to the prominence of the moon and the silhouetted cherry blossom tree.",
      tag: ['pink', 'landscape']
    },
    {
      path: '044.jpg',
      prompt: "Japanese-inspired landscape with a red color palette. Central elements, Large, full moon, Reddish Mount Fuji, Silhouetted cherry blossom tree. Atmosphere, Calm, serene, and peacefulSlightly mystical or ethereal. Additional details, The moon has a soft, glowing light.The cherry blossom tree is delicate and graceful. The water is still and reflective.",
      tag: ['red', 'landscape']
    },
    {
      path: '043.jpg',
      prompt: "Japanese-inspired landscape with a red color palette. Central elements, Large, full moon, Reddish Mount Fuji, Silhouetted cherry blossom tree. Atmosphere, Calm, serene, and peacefulSlightly mystical or ethereal. Additional details, The moon has a soft, glowing light.The cherry blossom tree is delicate and graceful. The water is still and reflective.",
      tag: ['red', 'landscape']
    },
    {
      path: '042.jpg',
      prompt: "Japanese-inspired landscape with a red color palette. Central elements, Large, full moon, Reddish Mount Fuji, Silhouetted cherry blossom tree. Atmosphere, Calm, serene, and peacefulSlightly mystical or ethereal. Additional details, The moon has a soft, glowing light.The cherry blossom tree is delicate and graceful. The water is still and reflective.",
      tag: ['red', 'landscape']
    },
    {
      path: '041.jpg',
      prompt: "Japanese-inspired landscape with a red color palette. Central elements, Large, full moon, Reddish Mount Fuji, Silhouetted cherry blossom tree. Atmosphere, Calm, serene, and peacefulSlightly mystical or ethereal. Additional details, The moon has a soft, glowing light.The cherry blossom tree is delicate and graceful. The water is still and reflective.",
      tag: ['red', 'landscape']
    },
    {
      path: '040.jpg',
      prompt: "Neon Torii gate at night, with a glowing deer in the background. Sakura trees with pink blossoms in the foreground. Foggy atmosphere with blue and purple lighting. Minimalist figure standing in front of the gate.",
      tag: ['purple', 'landscape']
    },
    {
      path: '039.jpg',
      prompt: "Neon Torii gate at night, with a glowing deer in the background. Sakura trees with pink blossoms in the foreground. Foggy atmosphere with blue and purple lighting. Minimalist figure standing in front of the gate.",
      tag: ['pink', 'landscape']
    },
    {
      path: '038.jpg',
      prompt: "A cosmic landscape dominated by a vibrant blue planet, partially obscured by swirling, ethereal clouds. Energetic blue flames erupt from the planet's surface, reaching towards the starry sky. The scene is filled with a sense of cosmic energy and mystery.",
      tag: ['bluesky', 'landscape']
    },
    {
      path: '037.jpg',
      prompt: "A cosmic landscape dominated by a vibrant blue planet, partially obscured by swirling, ethereal clouds. Energetic blue flames erupt from the planet's surface, reaching towards the starry sky. The scene is filled with a sense of cosmic energy and mystery.",
      tag: ['bluesky', 'landscape']
    },
    {
      path: '036.jpg',
      prompt: "A cosmic landscape dominated by a vibrant blue planet, partially obscured by swirling, ethereal clouds. Energetic blue flames erupt from the planet's surface, reaching towards the starry sky. The scene is filled with a sense of cosmic energy and mystery.",
      tag: ['bluesky', 'landscape']
    },
    {
      path: '035.jpg',
      prompt: "A cosmic landscape dominated by a vibrant blue planet, partially obscured by swirling, ethereal clouds. Energetic blue flames erupt from the planet's surface, reaching towards the starry sky. The scene is filled with a sense of cosmic energy and mystery.",
      tag: ['bluesky', 'landscape']
    },
    {
      path: '033.jpg',
      prompt: "A vast desert landscape with towering rock formations, bathed in the warm glow of a setting sun. A large, fiery ring surrounds the sun, casting an ethereal light across the scene. Dramatic sky with wisps of clouds.",
      tag: ['orange', 'landscape']
    },
    {
      path: '032.jpg',
      prompt: "A vast desert landscape with towering rock formations, bathed in the warm glow of a setting sun. A large, fiery ring surrounds the sun, casting an ethereal light across the scene. Dramatic sky with wisps of clouds.",
      tag: ['orange', 'landscape']
    },
    {
      path: '031.jpg',
      prompt: "A vast desert landscape with towering rock formations, bathed in the warm glow of a setting sun. A large, fiery ring surrounds the sun, casting an ethereal light across the scene. Dramatic sky with wisps of clouds.",
      tag: ['orange', 'landscape']
    },
    {
      path: '030.jpg',
      prompt: "A serene Japanese garden bathed in soft light. A traditional wooden house with a curved roof sits nestled amidst moss-covered rocks and a tranquil pond teeming with colorful koi fish. Lush greenery frames the scene, with vibrant autumn foliage adding a touch of warmth.",
      tag: ['orange', 'landscape']
    },
    {
      path: '029.jpg',
      prompt: "A serene Japanese garden bathed in soft light. A traditional wooden house with a curved roof sits nestled amidst moss-covered rocks and a tranquil pond teeming with colorful koi fish. Lush greenery frames the scene, with vibrant autumn foliage adding a touch of warmth.",
      tag: ['green', 'landscape']
    },
    {
      path: '028.jpg',
      prompt: "A serene Japanese garden bathed in soft light. A traditional wooden house with a curved roof sits nestled amidst moss-covered rocks and a tranquil pond teeming with colorful koi fish. Lush greenery frames the scene, with vibrant autumn foliage adding a touch of warmth.",
      tag: ['green', 'landscape']
    },
    {
      path: '027.jpg',
      prompt: "A serene Japanese garden bathed in soft light. A traditional wooden house with a curved roof sits nestled amidst moss-covered rocks and a tranquil pond teeming with colorful koi fish. Lush greenery frames the scene, with vibrant autumn foliage adding a touch of warmth.",
      tag: ['green', 'landscape']
    },
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
      prompt: 'Corgi on beach.',
      tag: ['corgi', 'dog', 'animal', 'beach', 'bluesky']
    },
    {
      path: 'fri11.jpeg',
      prompt: 'Corgi on beach.',
      tag: ['corgi', 'dog', 'animal', 'beach', 'bluesky']

    },
    {
      path: 'fri12.jpeg',
      prompt: 'Corgi on beach.',
      tag: ['corgi', 'dog', 'animal', 'beach', 'bluesky']

    },
    {
      path: 'fri13.jpeg',
      prompt: 'Corgi on beach.',
      tag: ['landscape', 'bluesky']

    }
  ];

  const getUniqueTags = (images) => {
    const allTags = images.flatMap(image => image.tag);
    return [...new Set(allTags)];
  };
  return (
    <ImageContext.Provider value={{ baseUrl, images, getUniqueTags }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContext;
