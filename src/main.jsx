import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './root/Root';
import HomePage from './pages/HomePage';
import PagesToRead from './pages/PagesToRead';
import ErrorPage from './pages/ErrorPage';
import BookDetails from './components/BookDetails';
import ListedBooks from './pages/ListedBooks';
import Wishlist from './components/Wishlist';
import ReadBook from './components/ReadBook';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/book.json")
      },
      {
        path: "/listedBook",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/book.json"),
        children: [
          {
            index:true,
            element: <ReadBook></ReadBook>,
            loader: () => fetch("/book.json"),
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
            loader: () => fetch("/book.json"),
          },
         
        ]
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch("/book.json"),
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
        
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
        
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
