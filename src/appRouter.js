import { createBrowserRouter } from 'react-router-dom';
import App from './App'; 
import Home from './component/Home'; 
import Login from './component/Login'; 
import Error from './component/Error'; 
import SignUp from './component/signUp';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
  },
  {
    path: '/home',
    element: <Home />, 
  },
  {
    path: '/login',
    element: <Login />, 
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path:'*',
    element: <Error/>
  }
]);
