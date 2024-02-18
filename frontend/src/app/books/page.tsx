import React, { useState } from 'react';
import BooksCatalogue from '../components/books/books-catalogue';


export default async function BooksPage() {

  return (
    <div>
      <h1>Books</h1>
      <BooksCatalogue />
      {/* Render content based on csvData */}
      <pre></pre> {/* Example of displaying raw data */}
    </div>
  )
}

