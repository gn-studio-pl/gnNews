import { BrowserRouter } from 'react-router-dom';
import { Theme, themeVariants } from './utils/theme/themeVariants';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './utils/theme/GlobalStyle';
import { Routes } from './routes/Routes';

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeVariants[Theme.LIGHT]}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
};
