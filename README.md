# เลี้ยงกาแฟผู้พัฒนา

!["Alt text"](https://warathepj.github.io/js-ai-gallery/public/image/promptpay-20.png)

# Next.js AI Gallery

## Overview

The Next.js AI Gallery is a web application that showcases a collection of images,
allowing users to browse, filter, and favorite images. The application is built
using Next.js and utilizes React Context for state management.

## Features

- **Image Gallery**: Displays a grid of images that can be filtered by tags.
- **Favorites**: Users can favorite images, which are stored in a context and can be viewed on a separate favorites page.
- **Dynamic Routing**: Each image can be viewed in detail on its own page.
- **Load More**: Users can load more images as they scroll through the gallery.
- **Back to Top**: A button to quickly scroll back to the top of the page.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **React**: A JavaScript library for building user interfaces.
- **Context API**: For managing global state across the application.
- **Tailwind CSS**: For styling the components.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/warathepj/nextjs-ai-gallery.git
   cd nextjs-ai-gallery
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Navigate through the gallery to view images.
- Click on an image to view its details.
- Use the "Load More" button to load additional images.
- Click the "Back To Top" button to quickly return to the top of the page.
- Favorite images to view them later in the favorites section.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
