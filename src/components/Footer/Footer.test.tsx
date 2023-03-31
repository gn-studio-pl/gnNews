import { Footer } from './Footer';
import { renderWithProviders } from '../../utils/testHelpers';
import { screen } from '@testing-library/react';
import dayjs from 'dayjs';

describe('Footer', () => {
  it('schould display current time', () => {
    renderWithProviders(<Footer />);
    const time = dayjs().format('HH:mm:ss');
    const clock = screen.getByText(time);
    expect(clock).toBeInTheDocument();
  });
});
