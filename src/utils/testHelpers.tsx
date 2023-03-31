import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { store } from '../redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme, themeVariants } from './theme/themeVariants';
import { GlobalStyle } from './theme/GlobalStyle';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/config';

export const renderWithProviders = (children: ReactNode) =>
  render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <ThemeProvider theme={themeVariants[Theme.LIGHT]}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </BrowserRouter>
      </I18nextProvider>
    </Provider>,
  );
