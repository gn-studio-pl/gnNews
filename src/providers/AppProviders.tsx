import { Provider } from 'react-redux';
import { store } from 'store/store';

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProviders;
