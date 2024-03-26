import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './root/Root';
import HomePage from './pages/HomePage';
import ListedBooks from './pages/ListedBooks';
import PagesToRead from './pages/PagesToRead';
import ErrorPage from './pages/ErrorPage';
import BookDetails from './components/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path:"/book/:id",
        element:<BookDetails></BookDetails>,
        loader:()=>fetch("book.json")
      },



      {
        path: "/listedBook",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
