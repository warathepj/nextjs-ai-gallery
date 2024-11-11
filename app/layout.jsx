// app/layout.js/
import { Inter } from "next/font/google";
import "./globals.css";
import { ImageProvider } from './context/ImageContext';
import { FavoriteProvider } from './context/FavoriteContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI-Gallery",
  description: "AI generated image gallery with prompt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ImageProvider> 
          <FavoriteProvider>
            <h1
              className="my-4 text-center text-3xl font-bold"
            >
              AI-Gallery
            </h1>
            {children}
            <h3
              className="mt-10 mb-2 text-center text-xl"
            >
              เลี้ยงกาแฟผู้พัฒนา
            </h3>

            <img
              className="w-36 mx-auto"
              src="https://warathepj.github.io/js-ai-gallery/public/image/promptpay-20.png" 
              alt="promptpay"
            />
            <h3
              className="mt-10 mb-2 text-center text-xl"
            >
              CorgiDev
            </h3>

            <img
              className="w-36 mx-auto"
              src="https://warathepj.github.io/js-ai-gallery/public/image/fri9.jpeg" 
              alt="corgi" 
            />
            <footer className="mt-10 text-center text-gray-500">
              <p>© 2024 CorgiDev. All rights reserved.</p>
            </footer>

          </FavoriteProvider>
        </ImageProvider>
      </body>
    </html>
  );
}
