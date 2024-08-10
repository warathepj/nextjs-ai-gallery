// import React from 'react'
import Link from 'next/link';

const Category = () => {
  const categoryId = 100;
  return (
    <>
        <Link href="/">home</Link>
        <h1>Category</h1>
        <h2><Link href="products/1">product 1</Link></h2>
        <h2><Link href="products/2">product 2</Link></h2>
        <h2><Link href="products/3" replace>product 3</Link></h2>
        <h2><Link href={`category/${categoryId}`}>Category {categoryId}</Link></h2>
        
    </>
  )
}

export default Category