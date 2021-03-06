import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { books } from './books';
import Book from './Book';

// JSX rules
// return single element
// div/section/article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting (should use ())

function BookList() {
  return (
    <div className='container'>
      <section className='booklist row'>
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>;
        })}
      </section>
    </div>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));
