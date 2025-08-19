import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import LayOut from './LayOut.jsx';
import PageShop from './Pages/PageShop.jsx';
import PageSign from './Pages/PageSign.jsx';
import PageSigein from './Pages/PageSigein.jsx';
import Pagewish from './Pages/Pagewish.jsx';
import PageHome from './Pages/PageHome.jsx';
import PageApi from './Pages/PageApi.jsx';
import PageAccount from './Pages/PageAccount.jsx';
import PageCatagori from './Pages/PageCatagori.jsx';
import PageChack from './Pages/PageChack.jsx';
import PageAccountwo from './Pages/PageAccountwo.jsx';
import PageAbout from './Pages/PageAbout.jsx';
import PageContact from './Pages/PageContact.jsx';
import PageError from './Pages/PageError.jsx';
import PageProduct from './Pages/PageProduct.jsx';
import {store} from './store.jsx'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    Component:LayOut,
    children:[
      {
        index:true, Component:App
      },
      {
        path:"shop",
        Component:PageShop
      },
      {
        path:"signup",
        Component:PageSign
      },

       {
        path:"login",
        Component:PageSigein
      },
       
      {
        path:"wishlist",
        Component:Pagewish
      },
      
      {
        path:"homecart",
        Component:PageHome
      },

      {
        path:"apicart",
        Component:PageApi
      },

      {
        path:"accountdrop",
        Component:PageAccount
      },

      {
        path:"catagoridrop",
        Component:PageCatagori
      },

      {
        path:"checkout",
        Component:PageChack
      },
       
      {
        path:"accounthome",
        Component:PageAccountwo
      },

      {
        path:"about",
        Component:PageAbout
      }, 
       
       {
        path:"contact",
        Component:PageContact
      }, 
       
       {
        path:"error",
        Component:PageError
      }, 

      {
        path:"productdetails",
        Component:PageProduct
      }, 
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>,
     
  </StrictMode>,
)





