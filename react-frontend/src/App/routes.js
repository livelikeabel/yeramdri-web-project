import Main from './pages/Main';
import Bible from './pages/Bible';
import Life from './pages/Life';
import SearchResult from './pages/SearchResult'
import ContentPage from './pages/Bible/ContentPage'

const routes = [
  {
    path: '/',
    exact: true,
    component: Main,
  },
  {
    path: '/bible/results',
    component: SearchResult,
  },
  {
    path: '/bible/:id',
    component: ContentPage,
  },
  {
    path: '/bible',
    component: Bible,
  },
  {
    path: '/life',
    component: Life,
  }
];

export default routes;
