import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root.jsx';
import Error from './Components/Error/Error.jsx';
import Home from './Components/Home/Home.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AddTouristSpot from './Components/AddTouristSpot/AddTouristSpot.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/spot')
      },
      {
        path: "/addSpots",
        element: <AddTouristSpot></AddTouristSpot>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      
      <RouterProvider router={router} />
      
    </AuthProvider>
  </React.StrictMode>,
)
