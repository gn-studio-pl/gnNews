import { fireEvent, screen } from '@testing-library/react';
import { Navigation } from '../Navigation';
import { renderWithProviders } from '../../../utils/testHelpers';

describe('Navigation', () => {
  it('schould display language', () => {
    renderWithProviders(<Navigation />);

    const text = screen.getByTestId('language-text');
    expect(text.textContent).toBe('En-US');

    const icon = screen.getByTestId('language-icon');
    fireEvent.click(icon);
    expect(text.textContent).toBe('Pl');
    expect(text.textContent).not.toBe('En');

    fireEvent.click(icon);
    expect(text.textContent).toBe('En');
  });
});
