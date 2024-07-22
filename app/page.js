// app/page.js/
// from app/page.js/ create route to /insert
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const baseUrl = 'https://warathepj.github.io/js-ai-gallery/';
  const images = {
    'fri9.jpeg': 'public/image/fri9.jpeg',
    'fri10.jpeg': 'public/image/fri10.jpeg',
    'fri11.jpeg': 'public/image/fri11.jpeg',
    'fri12.jpeg': 'public/image/fri12.jpeg',
    'fri13.jpeg': 'public/image/fri13.jpeg',
  };

  return (
    <div>
      <Link href="/insert" style={{ cursor: 'pointer' }}>Go to Insert Page</Link>

      <h1>Image Gallery</h1>
      <div>
        {Object.entries(images).map(([filename, path]) => (
          <Image 
            key={filename}
            src={`${baseUrl}${path}`}
            alt={filename}
            width={300}
            height={200}
            unoptimized
          />
        ))}
      </div>
    </div>
  );
}