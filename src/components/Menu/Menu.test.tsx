import { screen } from '@testing-library/react';
import { countries } from '../../utils/countries';
import { Menu } from './Menu';
import { renderWithProviders } from '../../utils/testHelpers';

describe('Menu', () => {
  it('schould display country', () => {
    renderWithProviders(<Menu />);
    const country = screen.getByText(countries[0].name);
    expect(country).toBeInTheDocument();
  });
});
