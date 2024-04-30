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
import SpotDetails from './Components/SpotDetails/SpotDetails.jsx';
import Update from './Components/Update/Update.jsx';
import PrivateRpute from './Components/Route/PrivateRpute.jsx';
import MyList from './Components/MyList/MyList.jsx';


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
        element: <PrivateRpute><AddTouristSpot></AddTouristSpot></PrivateRpute>
      },
      {
        path: "/mylist",
        element: <PrivateRpute><MyList></MyList></PrivateRpute>,
        loader: () => fetch('http://localhost:5000/spot')
      },
      {
        path: "/spot/:id",
        element: <PrivateRpute><SpotDetails></SpotDetails></PrivateRpute>,
        loader: ({params}) => fetch(`http://localhost:5000/spot/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/spot/${params.id}`)
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
