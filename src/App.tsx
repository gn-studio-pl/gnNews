import AppProviders from './providers/AppProviders';
import AppRoutes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <h1>Hello</h1>
        <AppRoutes />
      </AppProviders>
    </BrowserRouter>
  );
}

export default App;
