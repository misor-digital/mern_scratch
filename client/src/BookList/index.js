import { useState, useEffect } from 'react';
import axios                   from 'axios';

import { BookListView } from "./BookListView";
import { BookModel }    from '../models/Book';

export const BookList = () => {
  const [ books, setBooks ] = useState([BookModel]);

  useEffect(() => {
    axios
      .get('https://localhost:3000/api/books')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.error('Error from BookList');
      })
  }, []);

  return (
    <BookListView
      model = { books }
    />
  );
};
