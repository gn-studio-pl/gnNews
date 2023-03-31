import { Layout } from '../components/Layout/Layout';
import { routesConfig } from './routesConfig';
import { Route, Routes as Switch } from 'react-router-dom';

export const Routes = () => {
  return (
    <Layout>
      <Switch>
        {routesConfig.map(({ component: Component, path }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Switch>
    </Layout>
  );
};
