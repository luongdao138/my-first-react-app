import React from 'react';

const Book = (props) => {
  // onClick, onMouseOver
  const complexExample = (author) => {
    console.log(author);
  };

  const { img, title, author, description, children } = props;
  return (
    <article className='col-md-4 col-sm-6'>
      <div className='book-item'>
        <img src={img} alt='' />
        <h1
          className='title'
          onClick={() => {
            console.log(title);
          }}
        >
          {title}
        </h1>
        <h4 className='author'>{author}</h4>
        <p className='description'>{description}</p>
        <button type='button' onClick={(e) => complexExample(author)}>
          Delete
        </button>
      </div>
    </article>
  );
};

export default Book;
