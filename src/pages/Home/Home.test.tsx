import { fireEvent, screen } from '@testing-library/react';
import { Home } from './Home';
import { Navigation } from '../../components/Navigation/Navigation';
import { renderWithProviders } from '../../utils/testHelpers';
import en from '../../i18n/en.json';
import pl from '../../i18n/pl.json';

describe('Home', () => {
  it('schould display hi text', () => {
    renderWithProviders(
      <>
        <Navigation />
        <Home />
      </>,
    );
    const icon = screen.getByTestId('language-icon');

    expect(screen.getByText(en.homePage.hi)).toBeInTheDocument();

    fireEvent.click(icon);
    expect(screen.getByText(pl.homePage.hi)).toBeInTheDocument();

    fireEvent.click(icon);
    expect(screen.getByText(en.homePage.hi)).toBeInTheDocument();
  });
});
