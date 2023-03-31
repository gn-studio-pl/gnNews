import { Country } from '../pages/Country/Country';
import { Home } from '../pages/Home/Home';
import { paths } from './paths';

export const routesConfig = [
  {
    component: Home,
    path: paths.home,
  },
  {
    component: Country,
    path: paths.country(':country'),
  },
  {
    component: Home,
    path: paths.all,
  },
];
