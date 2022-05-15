import axios from 'axios';

const books = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
});

const googleapis = {
  books,
};

export {googleapis};
