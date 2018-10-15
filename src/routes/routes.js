import SignUp from '../components/sign-up/signUp';
import About from '../components/about-us/About'; 
import NotFound from '../components/404-page/NotFound';

const routes = [
  {
    path: '/signup',
    component: SignUp,
    id: 'signup',
  },
  {
    path: '/',
    exact: true,
    component: About,
    id: 'about',
  },
  {
    component: NotFound,
    id: 'not_found',
  },
];

export default routes;
