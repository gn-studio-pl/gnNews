import AppProviders from './providers/AppProviders';
import AppRoutes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <AppRoutes />
      </AppProviders>
    </BrowserRouter>
  );
}

export default App;
