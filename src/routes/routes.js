import SignUp from '../components/sign-up/signUp';
import About from '../components/about-us/About'; 
import Blog from '../components/blog/Blog';
import Resources from '../components/resources/Resources';
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
    path: '/blog',
    component: Blog,
    id: 'Blog',
  },
  {
    path: '/resources',
    component: Resources,
    id: 'resources',
  },
  {
    component: NotFound,
    id: 'not_found',
  }
];

export default routes;
